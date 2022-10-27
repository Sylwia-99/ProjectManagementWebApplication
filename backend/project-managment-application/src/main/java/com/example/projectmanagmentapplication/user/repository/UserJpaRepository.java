package com.example.projectmanagmentapplication.user.repository;

import com.example.projectmanagmentapplication.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepository extends JpaRepository<User, Long> {
}
