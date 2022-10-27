package com.example.projectmanagmentapplication.user.entity;

import com.example.projectmanagmentapplication.workspace.entity.Workspace;
import com.example.projectmanagmentapplication.workspace.issue.entity.Issue;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "\"user\"")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_details_id", referencedColumnName = "id")
    private UserDetails userDetails;

    @ManyToMany(mappedBy = "members", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JsonIgnoreProperties("members")
    private Set<Workspace> workspaces = new HashSet<>();

    @ManyToMany(mappedBy = "assignedPersons", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JsonIgnoreProperties("assignedPersons")
    private Set<Issue> assignedTasks = new HashSet<>();

    @ManyToMany(mappedBy = "followersPersons", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JsonIgnoreProperties("followersPersons")
    private Set<Issue> watchedTasks = new HashSet<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
