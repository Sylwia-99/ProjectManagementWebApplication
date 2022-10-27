package com.example.projectmanagmentapplication.user.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "\"user\"")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_details_id", referencedColumnName = "id")
    private UserDetails userDetails;
}
