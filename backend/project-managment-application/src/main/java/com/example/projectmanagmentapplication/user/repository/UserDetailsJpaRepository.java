package com.example.projectmanagmentapplication.user.repository;

import com.example.projectmanagmentapplication.user.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsJpaRepository extends JpaRepository<UserDetails, Long> {
}
