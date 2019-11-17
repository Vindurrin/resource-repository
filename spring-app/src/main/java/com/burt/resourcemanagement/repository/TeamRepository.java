package com.burt.resourcemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.burt.resourcemanagement.model.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long>{

}