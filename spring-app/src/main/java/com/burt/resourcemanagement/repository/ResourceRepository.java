package com.burt.resourcemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.burt.resourcemanagement.model.Resource;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long>{
	
		

}