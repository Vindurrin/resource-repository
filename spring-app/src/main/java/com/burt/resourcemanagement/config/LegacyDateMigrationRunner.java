package com.burt.resourcemanagement.config;

import java.util.Arrays;
import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class LegacyDateMigrationRunner implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(LegacyDateMigrationRunner.class);

    private final JdbcTemplate jdbcTemplate;
    private final DataSource dataSource;

    public LegacyDateMigrationRunner(JdbcTemplate jdbcTemplate, DataSource dataSource) {
        this.jdbcTemplate = jdbcTemplate;
        this.dataSource = dataSource;
    }

    @Override
    public void run(String... args) {
        migrateTable("resources", Arrays.asList("start", "end"));
        migrateTable("teams", Arrays.asList("start", "end"));
    }

    private void migrateTable(String tableName, List<String> dateColumns) {
        try {
            String dbName;
            try (java.sql.Connection connection = dataSource.getConnection()) {
                dbName = connection.getCatalog();
            }
            String sqlType = jdbcTemplate.queryForObject(
                "SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?",
                String.class,
                dbName,
                tableName,
                dateColumns.get(0)
            );

            if (sqlType == null || !("datetime".equalsIgnoreCase(sqlType) || "timestamp".equalsIgnoreCase(sqlType))) {
                return;
            }

            String dateShiftSql = "UPDATE " + tableName
                + " SET " + dateColumns.get(0) + " = DATE_SUB(" + dateColumns.get(0) + ", INTERVAL 6 HOUR), "
                + dateColumns.get(1) + " = DATE_SUB(" + dateColumns.get(1) + ", INTERVAL 6 HOUR)"
                + " WHERE HOUR(" + dateColumns.get(0) + ") = 6 OR HOUR(" + dateColumns.get(1) + ") = 6";
            jdbcTemplate.execute(dateShiftSql);

            String alterSql = "ALTER TABLE " + tableName
                + " MODIFY " + dateColumns.get(0) + " DATE NOT NULL,"
                + " MODIFY " + dateColumns.get(1) + " DATE NOT NULL";
            jdbcTemplate.execute(alterSql);

            LOGGER.info("Migrated legacy shifted datetime columns on table '{}'.", tableName);
        } catch (Exception ex) {
            LOGGER.warn("Skipped date migration for table '{}' due to: {}", tableName, ex.getMessage());
        }
    }
}
