package net.guides.springboot2.springboot2jpacrudexample;

import static org.junit.Assert.assertNotNull;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import net.guides.springboot2.springboot2jpacrudexample.controller.ResourceController;
import net.guides.springboot2.springboot2jpacrudexample.controller.TeamController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Springboot2JpaCrudExampleApplicationTests {

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
