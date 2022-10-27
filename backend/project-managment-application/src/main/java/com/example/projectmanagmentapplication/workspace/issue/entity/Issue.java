package com.example.projectmanagmentapplication.workspace.issue.entity;

import com.example.projectmanagmentapplication.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Issue {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @Column(columnDefinition = "text")
    private String description;

    @Column(columnDefinition = "text")
    private String acceptanceCriteria;

    private int storyPoints;

    @Enumerated(value = EnumType.STRING)
    private StatusIssue statusIssue;

    @Enumerated(value = EnumType.STRING)
    private PriorityStatus priority;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private User reportingPerson;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "issue_assigned_persons",
            joinColumns = @JoinColumn(name = "issue_id"),
            inverseJoinColumns = @JoinColumn(name = "assigned_person_id")
    )
    @JsonIgnoreProperties("assignedTasks")
    private Set<User> assignedPersons = new HashSet<>();

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "issue_followers_persons",
            joinColumns = @JoinColumn(name = "issue_id"),
            inverseJoinColumns = @JoinColumn(name = "followers_person_id")
    )
    @JsonIgnoreProperties("watchedTasks")
    private Set<User> followersPersons = new HashSet<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
