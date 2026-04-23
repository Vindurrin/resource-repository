package com.burt.resourcemanagement;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Connection;

import javax.sql.DataSource;

import com.burt.resourcemanagement.config.LegacyDateMigrationRunner;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.jdbc.core.JdbcTemplate;

@RunWith(MockitoJUnitRunner.class)
public class LegacyDateMigrationRunnerTest {

    @Mock
    private JdbcTemplate jdbcTemplate;

    @Mock
    private DataSource dataSource;

    @Mock
    private Connection connection;

    @Test
    public void migratesLegacyDatetimeColumns() throws Exception {
        when(dataSource.getConnection()).thenReturn(connection);
        when(connection.getCatalog()).thenReturn("resource_db");
        when(jdbcTemplate.queryForObject(anyString(), eq(String.class), eq("resource_db"), eq("resources"), eq("start")))
            .thenReturn("datetime");
        when(jdbcTemplate.queryForObject(anyString(), eq(String.class), eq("resource_db"), eq("teams"), eq("start")))
            .thenReturn("timestamp");

        LegacyDateMigrationRunner runner = new LegacyDateMigrationRunner(jdbcTemplate, dataSource);
        runner.run();

        verify(jdbcTemplate).execute("UPDATE resources SET start = DATE_SUB(start, INTERVAL 6 HOUR), end = DATE_SUB(end, INTERVAL 6 HOUR) WHERE HOUR(start) = 6 OR HOUR(end) = 6");
        verify(jdbcTemplate).execute("ALTER TABLE resources MODIFY start DATE NOT NULL, MODIFY end DATE NOT NULL");
        verify(jdbcTemplate).execute("UPDATE teams SET start = DATE_SUB(start, INTERVAL 6 HOUR), end = DATE_SUB(end, INTERVAL 6 HOUR) WHERE HOUR(start) = 6 OR HOUR(end) = 6");
        verify(jdbcTemplate).execute("ALTER TABLE teams MODIFY start DATE NOT NULL, MODIFY end DATE NOT NULL");
    }

    @Test
    public void skipsWhenColumnsAlreadyDate() throws Exception {
        when(dataSource.getConnection()).thenReturn(connection);
        when(connection.getCatalog()).thenReturn("resource_db");
        when(jdbcTemplate.queryForObject(anyString(), eq(String.class), eq("resource_db"), eq("resources"), eq("start")))
            .thenReturn("date");
        when(jdbcTemplate.queryForObject(anyString(), eq(String.class), eq("resource_db"), eq("teams"), eq("start")))
            .thenReturn("date");

        LegacyDateMigrationRunner runner = new LegacyDateMigrationRunner(jdbcTemplate, dataSource);
        runner.run();

        verify(jdbcTemplate, never()).execute(anyString());
    }
}
