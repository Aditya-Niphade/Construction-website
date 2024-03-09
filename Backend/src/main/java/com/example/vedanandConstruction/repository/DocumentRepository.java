package com.example.vedanandConstruction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Documents;

public interface DocumentRepository extends JpaRepository<Documents, Integer> {

}
