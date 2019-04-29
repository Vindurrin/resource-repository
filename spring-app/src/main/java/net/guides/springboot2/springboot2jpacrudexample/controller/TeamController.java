package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot2.springboot2jpacrudexample.exception.TeamNotFoundException;
import net.guides.springboot2.springboot2jpacrudexample.model.Team;
import net.guides.springboot2.springboot2jpacrudexample.repository.TeamRepository;

@RestController
@RequestMapping("/api/v1")
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/teams")
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @GetMapping("/teams/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable(value = "id") Long teamId)
        throws TeamNotFoundException {
        Team team = teamRepository.findById(teamId)
          .orElseThrow(() -> new TeamNotFoundException("Team not found for this id :: " + teamId));
        return ResponseEntity.ok().body(team);
    }
    
    @PostMapping("/teams")
    public Team createTeam(@Valid @RequestBody Team team) {
    	System.out.println("Start date: " + team.getStart());
        return teamRepository.save(team);
    }

    @PutMapping("/teams/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable(value = "id") Long teamId,
         @Valid @RequestBody Team teamDetails) throws TeamNotFoundException {
        Team team = teamRepository.findById(teamId)
        .orElseThrow(() -> new TeamNotFoundException("Team not found for this id :: " + teamId));

        //team.setRole(teamDetails.getRole());

        
        final Team updatedTeam = teamRepository.save(team);
        return ResponseEntity.ok(updatedTeam);
    }

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