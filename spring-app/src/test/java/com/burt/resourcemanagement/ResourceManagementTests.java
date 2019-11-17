package com.burt.resourcemanagement;

import static org.junit.Assert.assertNotNull;

import com.burt.resourcemanagement.controller.ResourceController;
import com.burt.resourcemanagement.controller.TeamController;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 
 * @author matthew.burt
 *
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class ResourceManagementTests {

	@Autowired
	private ResourceController resourceController;

	@Autowired
	private TeamController teamController;

	@Before
	public void setUp() {
		System.out.println("Set Up");
	}

	@After
	public void tearDown() {
		System.out.println("Tear Down");
	}

	@Test
	public void contextLoads() throws Exception {
		assertNotNull(resourceController);
		assertNotNull(teamController);
	}

	

}