package com.burt.resourcemanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.burt.resourcemanagement.exception.TeamNotFoundException;
import com.burt.resourcemanagement.model.Team;
import com.burt.resourcemanagement.repository.TeamRepository;

@RestController
@RequestMapping("/api/v1")
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teams")
    public List<Team> getAllTeams(
        @RequestParam(value = "name", required = false) String name,
        @RequestParam(value = "project", required = false) String project,
        @RequestParam(value = "status", required = false) String status,
        @RequestParam(value = "term", required = false) String term) {
        return teamRepository.findAll().stream()
            .filter(team -> containsIgnoreCase(team.getName(), name))
            .filter(team -> containsIgnoreCase(team.getProject(), project))
            .filter(team -> containsIgnoreCase(team.getStatus(), status))
            .filter(team -> containsIgnoreCase(team.getName(), term)
                || containsIgnoreCase(team.getProject(), term))
            .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teams/search")
    public List<Team> searchTeams(@RequestParam(value = "term") String term) {
        return teamRepository.findAll().stream()
            .filter(team -> containsIgnoreCase(team.getName(), term)
                || containsIgnoreCase(team.getProject(), term))
            .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teams/{id:\\d+}")
    public ResponseEntity<Team> getTeamById(@PathVariable(value = "id") Long teamId)
        throws TeamNotFoundException {
        Team team = teamRepository.findById(teamId)
            .orElseThrow(() -> new TeamNotFoundException("Team not found for this id :: " + teamId));
        return ResponseEntity.ok(team);
    }

    @Deprecated
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/teams/{name:[^\\d].*}")
    public ResponseEntity<List<Team>> getTeamByNameDeprecated(@PathVariable(value = "name") String name) {
        List<Team> results = teamRepository.findAll().stream()
            .filter(team -> containsIgnoreCase(team.getName(), name)
                || containsIgnoreCase(team.getProject(), name))
            .collect(Collectors.toList());

        HttpHeaders headers = deprecationHeaders();
        return ResponseEntity.ok().headers(headers).body(results);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/teams")
    public Team createTeam(@Valid @RequestBody Team team) {
        team.fixDate();
        return teamRepository.save(team);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/teams/edit/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable(value = "id") Long teamId,
        @Valid @RequestBody Team teamDetails) throws TeamNotFoundException {
        Team team = teamRepository.findById(teamId)
            .orElseThrow(() -> new TeamNotFoundException("Team not found for this id :: " + teamId));

        team.setName(teamDetails.getName());
        team.setResources(teamDetails.getResources());
        team.setStatus(teamDetails.getStatus());
        team.setStart(teamDetails.getStart());
        team.setEnd(teamDetails.getEnd());
        team.setProject(teamDetails.getProject());
        team.fixDate();

        final Team updatedTeam = teamRepository.save(team);
        return ResponseEntity.ok(updatedTeam);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/teams/{id}")
    public Map<String, Boolean> deleteTeam(@PathVariable(value = "id") Long teamId)
        throws TeamNotFoundException {
        Team team = teamRepository.findById(teamId)
            .orElseThrow(() -> new TeamNotFoundException("Team not found for this id :: " + teamId));

        teamRepository.delete(team);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    private boolean containsIgnoreCase(String fieldValue, String queryValue) {
        return queryValue == null || (fieldValue != null && fieldValue.toLowerCase().contains(queryValue.toLowerCase()));
    }

    private HttpHeaders deprecationHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Deprecation", "true");
        headers.add("Sunset", "Wed, 31 Dec 2026 23:59:59 GMT");
        headers.add("Link", "</docs/api-contract.md>; rel=\"deprecation\"");
        return headers;
    }
}
