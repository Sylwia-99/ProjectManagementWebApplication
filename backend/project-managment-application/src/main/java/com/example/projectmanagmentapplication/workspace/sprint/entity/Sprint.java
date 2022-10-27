package com.example.projectmanagmentapplication.workspace.sprint.entity;

import com.example.projectmanagmentapplication.workspace.issue.entity.Issue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Sprint {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Column(columnDefinition = "text")
    private String sprintGoal;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "sprint_id")
    private List<Issue> issues = new ArrayList<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
