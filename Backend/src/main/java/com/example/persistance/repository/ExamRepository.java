package com.example.persistance.repository;

import com.example.persistance.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    List <Exam> findByYearOfStudy(int yearOfStudy);
    List <Exam> findByFaculty(String faculty);
}
