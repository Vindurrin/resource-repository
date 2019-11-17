package net.guides.springboot2.springboot2jpacrudexample.controller;

import java.util.ArrayList;
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

import net.guides.springboot2.springboot2jpacrudexample.exception.ResourceNotFoundException;
import net.guides.springboot2.springboot2jpacrudexample.model.Resource;
import net.guides.springboot2.springboot2jpacrudexample.repository.ResourceRepository;

@RestController
@RequestMapping("/api/v1")
public class ResourceController {
    @Autowired
    private ResourceRepository resourceRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources")
    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resources/{role}")
    public List<Resource> getResourceByRole(@PathVariable(value = "role") String role)
        throws ResourceNotFoundException {
    	//System.out.println("search is being called " + role);
    	List<Resource> allResources = resourceRepository.findAll();
    	List<Resource> results = new ArrayList<Resource>();
    	for(Resource resource : allResources) {
    		if(resource.getRole().contains(role) || resource.getProject().contains(role)) {
    			results.add(resource);
    		}
    	}
        return results;
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
}