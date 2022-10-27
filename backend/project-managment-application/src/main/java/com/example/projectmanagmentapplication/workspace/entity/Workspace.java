package com.example.projectmanagmentapplication.workspace.entity;

import com.example.projectmanagmentapplication.user.entity.User;
import com.example.projectmanagmentapplication.workspace.issue.entity.Issue;
import com.example.projectmanagmentapplication.workspace.sprint.entity.Sprint;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@EntityListeners(AuditingEntityListener.class)
public class Workspace {
    @Id
    @GeneratedValue
    private Long id;

    private String workspaceName;

    @Column(columnDefinition = "text")
    private String description;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "workspace_members",
            joinColumns = @JoinColumn(name = "workspace_id"),
            inverseJoinColumns = @JoinColumn(name = "member_id")
    )
    @JsonIgnoreProperties("workspaces")
    private Set<User> members = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "workspace_id")
    private List<Issue> productBacklog = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "workspace_id")
    private List<Sprint> sprints = new ArrayList<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
