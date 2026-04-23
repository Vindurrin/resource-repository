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

import com.burt.resourcemanagement.model.Team;
import com.burt.resourcemanagement.repository.TeamRepository;

@RunWith(SpringRunner.class)
@WebMvcTest(TeamController.class)
public class TeamControllerHttpTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TeamRepository teamRepository;

    @Test
    public void listTeamsWithFiltersReturnsOk() throws Exception {
        Team alpha = team(1L, "Alpha", "Apollo");
        Team beta = team(2L, "Beta", "Hermes");
        when(teamRepository.findAll()).thenReturn(Arrays.asList(alpha, beta));

        mockMvc.perform(get("/api/v1/teams").param("name", "Alpha").param("project", "Apollo"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].id").value(1));
    }

    @Test
    public void getTeamByIdReturnsOk() throws Exception {
        when(teamRepository.findById(8L)).thenReturn(Optional.of(team(8L, "Core", "Atlas")));

        mockMvc.perform(get("/api/v1/teams/8"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(8));
    }

    @Test
    public void getTeamByIdReturnsNotFound() throws Exception {
        when(teamRepository.findById(anyLong())).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/v1/teams/81"))
            .andExpect(status().isNotFound());
    }

    @Test
    public void deprecatedSearchEndpointReturnsDeprecationHeaders() throws Exception {
        when(teamRepository.findAll()).thenReturn(Arrays.asList(team(3L, "Platform", "Atlas")));

        mockMvc.perform(get("/api/v1/teams/platform"))
            .andExpect(status().isOk())
            .andExpect(header().string("Deprecation", "true"))
            .andExpect(header().string("Sunset", "Wed, 31 Dec 2026 23:59:59 GMT"));
    }

    private Team team(long id, String name, String project) {
        Team team = new Team();
        team.setId(id);
        team.setName(name);
        team.setProject(project);
        team.setStatus("Active");
        team.setResources(Arrays.asList("r1", "r2"));
        team.setStart(new Date());
        team.setEnd(new Date());
        return team;
    }
}
