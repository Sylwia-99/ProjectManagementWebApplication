package com.example.projectmanagmentapplication.workspace.issue.repository;

import com.example.projectmanagmentapplication.workspace.issue.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueJpaRepository extends JpaRepository<Issue, Long> {
}
