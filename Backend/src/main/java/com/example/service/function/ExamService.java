package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ExamService {
    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getExams() {

        return examRepository.findAll();
    }

    public Exam createExam(Exam exam) {

        return examRepository.save(exam);
    }

    public Exam updateExam(Exam exam, long id) {
        Exam existingExam = examRepository.findById(id).orElse(exam);
        existingExam.setDate(exam.getDate());
        existingExam.setSeats(exam.getSeats());
        existingExam.setYearOfStudy(exam.getYearOfStudy());
        existingExam.setSemester(exam.getSemester());
        existingExam.setAcademycYear(exam.getAcademycYear());
        existingExam.setStatus(exam.getStatus());
        existingExam.setCourse(exam.getCourse());
        existingExam.setFaculty(exam.getFaculty());
        existingExam.setProfessor(exam.getProfessor());
        return examRepository.save(existingExam);
    }

    public Exam updateStatus(Exam exam, long id){
        Exam existingStatus = examRepository.findById(id).orElse(exam);
        existingStatus.setStatus(exam.getStatus());
        return examRepository.save(existingStatus);
    }

    public String deleteExam(long id) {
        examRepository.deleteById(id);
        return "Removed";
    }
}
