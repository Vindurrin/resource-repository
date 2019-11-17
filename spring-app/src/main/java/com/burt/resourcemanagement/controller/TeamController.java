package com.burt.resourcemanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
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
}