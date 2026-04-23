package com.burt.resourcemanagement.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.Date;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.burt.resourcemanagement.model.Resource;
import com.burt.resourcemanagement.repository.ResourceRepository;

@RunWith(SpringRunner.class)
@WebMvcTest(ResourceController.class)
public class ResourceControllerHttpTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ResourceRepository resourceRepository;

    @Test
    public void listResourcesWithFiltersReturnsOk() throws Exception {
        Resource backend = resource(1L, "Backend Engineer", "Apollo");
        Resource frontend = resource(2L, "Frontend Engineer", "Hermes");
        when(resourceRepository.findAll()).thenReturn(Arrays.asList(backend, frontend));

        mockMvc.perform(get("/api/v1/resources").param("role", "Backend").param("project", "Apollo"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].id").value(1));
    }

    @Test
    public void getResourceByIdReturnsOk() throws Exception {
        Resource backend = resource(7L, "Platform Engineer", "Atlas");
        when(resourceRepository.findById(7L)).thenReturn(Optional.of(backend));

        mockMvc.perform(get("/api/v1/resources/7"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(7));
    }

    @Test
    public void getResourceByIdReturnsNotFound() throws Exception {
        when(resourceRepository.findById(anyLong())).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/v1/resources/77"))
            .andExpect(status().isNotFound());
    }

    @Test
    public void deprecatedSearchEndpointReturnsDeprecationHeaders() throws Exception {
        when(resourceRepository.findAll()).thenReturn(Arrays.asList(resource(1L, "Backend Engineer", "Apollo")));

        mockMvc.perform(get("/api/v1/resources/backend"))
            .andExpect(status().isOk())
            .andExpect(header().string("Deprecation", "true"))
            .andExpect(header().string("Sunset", "Wed, 31 Dec 2026 23:59:59 GMT"));
    }

    private Resource resource(long id, String role, String project) {
        Resource resource = new Resource();
        resource.setId(id);
        resource.setRole(role);
        resource.setProject(project);
        resource.setStatus("Active");
        resource.setSudorole("Member");
        resource.setStart(new Date());
        resource.setEnd(new Date());
        return resource;
    }
}
