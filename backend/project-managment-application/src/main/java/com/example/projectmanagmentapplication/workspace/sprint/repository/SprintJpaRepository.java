package com.example.projectmanagmentapplication.workspace.sprint.repository;

import com.example.projectmanagmentapplication.workspace.sprint.entity.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SprintJpaRepository extends JpaRepository<Sprint, Long> {
}