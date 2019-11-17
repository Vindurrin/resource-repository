package net.guides.springboot2.springboot2jpacrudexample;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class DatabaseTest {
	
	Connection connection;

	@Before
	public void setUp() throws Exception {
		Class.forName("com.mysql.cj.jdbc.Driver");
		String url = "jdbc:mysql://localhost:3306/resource_db";
		String user = "root";
		String password = "Monday12";
		connection = DriverManager.getConnection(url, user, password);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		assertNotNull(connection);
	}

}
