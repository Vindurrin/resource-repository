package com.burt.resourcemanagement;

import static org.junit.Assert.assertNotNull;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class DatabaseTest {

    private static final String DB_URL_ENV = "TEST_DB_URL";
    private static final String DB_USER_ENV = "TEST_DB_USERNAME";
    private static final String DB_PASSWORD_ENV = "TEST_DB_PASSWORD";

    Connection connection;

    @Before
    public void setUp() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = envOrDefault(DB_URL_ENV, "jdbc:mysql://localhost:3306/resource_db");
        String user = envOrDefault(DB_USER_ENV, "root");
        String password = envOrDefault(DB_PASSWORD_ENV, "");
        connection = DriverManager.getConnection(url, user, password);
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void test() {
        assertNotNull(connection);
    }

    private String envOrDefault(String key, String defaultValue) {
        String value = System.getenv(key);
        return value == null || value.trim().isEmpty() ? defaultValue : value;
    }
}
