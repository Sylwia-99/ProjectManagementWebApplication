package com.example.projectmanagmentapplication.workspace.repository;

import com.example.projectmanagmentapplication.workspace.entity.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkspaceJpaRepository extends JpaRepository<Workspace, Long> {
}
