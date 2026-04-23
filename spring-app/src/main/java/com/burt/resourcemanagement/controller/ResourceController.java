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

import com.burt.resourcemanagement.exception.ResourceNotFoundException;
import com.burt.resourcemanagement.model.Resource;
import com.burt.resourcemanagement.repository.ResourceRepository;

@RestController
@RequestMapping("/api/v1")
public class ResourceController {
    @Autowired
    private ResourceRepository resourceRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources")
    public List<Resource> getAllResources(
        @RequestParam(value = "role", required = false) String role,
        @RequestParam(value = "project", required = false) String project,
        @RequestParam(value = "status", required = false) String status,
        @RequestParam(value = "term", required = false) String term) {
        return resourceRepository.findAll().stream()
            .filter(resource -> containsIgnoreCase(resource.getRole(), role))
            .filter(resource -> containsIgnoreCase(resource.getProject(), project))
            .filter(resource -> containsIgnoreCase(resource.getStatus(), status))
            .filter(resource -> containsIgnoreCase(resource.getRole(), term)
                || containsIgnoreCase(resource.getProject(), term)
                || containsIgnoreCase(resource.getSudorole(), term))
            .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources/search")
    public List<Resource> searchResources(@RequestParam(value = "term") String term) {
        return resourceRepository.findAll().stream()
            .filter(resource -> containsIgnoreCase(resource.getRole(), term)
                || containsIgnoreCase(resource.getProject(), term)
                || containsIgnoreCase(resource.getSudorole(), term))
            .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources/{id:\\d+}")
    public ResponseEntity<Resource> getResourceById(@PathVariable(value = "id") Long resourceId)
        throws ResourceNotFoundException {
        Resource resource = resourceRepository.findById(resourceId)
            .orElseThrow(() -> new ResourceNotFoundException("Resource not found for this id: " + resourceId));
        return ResponseEntity.ok(resource);
    }

    @Deprecated
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources/{role:[^\\d].*}")
    public ResponseEntity<List<Resource>> getResourceByRoleDeprecated(@PathVariable(value = "role") String role) {
        List<Resource> results = resourceRepository.findAll().stream()
            .filter(resource -> containsIgnoreCase(resource.getRole(), role)
                || containsIgnoreCase(resource.getProject(), role))
            .collect(Collectors.toList());

        HttpHeaders headers = deprecationHeaders();
        return ResponseEntity.ok().headers(headers).body(results);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/resources")
    public Resource createResource(@Valid @RequestBody Resource resource) {
        resource.fixDate();
        return resourceRepository.save(resource);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/resources/edit/{id}")
    public ResponseEntity<Resource> updateResource(@PathVariable(value = "id") Long resourceId,
        @Valid @RequestBody Resource resourceDetails) throws ResourceNotFoundException {
        Resource resource = resourceRepository.findById(resourceId)
            .orElseThrow(() -> new ResourceNotFoundException("Resource not found for this id: " + resourceId));

        resource.setRole(resourceDetails.getRole());
        resource.setStart(resourceDetails.getStart());
        resource.setEnd(resourceDetails.getEnd());
        resource.setSudorole(resourceDetails.getSudorole());
        resource.setProject(resourceDetails.getProject());
        resource.setStatus(resourceDetails.getStatus());
        resource.fixDate();

        final Resource updatedResource = resourceRepository.save(resource);
        return ResponseEntity.ok(updatedResource);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/resources/{id}")
    public Map<String, Boolean> deleteResource(@PathVariable(value = "id") Long resourceId)
        throws ResourceNotFoundException {
        Resource resource = resourceRepository.findById(resourceId)
            .orElseThrow(() -> new ResourceNotFoundException("Resource not found for this id: " + resourceId));

        resourceRepository.delete(resource);
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
