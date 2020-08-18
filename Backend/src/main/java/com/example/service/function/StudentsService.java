package com.example.service.function;

import com.example.persistance.entity.Exam;
import com.example.persistance.entity.Login;
import com.example.persistance.entity.Students;
import com.example.persistance.repository.ExamRepository;
import com.example.persistance.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentsService {

    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private StudentsRepository studentsRepository;

    public List<Students> getStudents() {

        return studentsRepository.findAll();
    }

    public Students createStudents(Students students) {
        return studentsRepository.save(students);
    }

    public Students updateStudent(Students students, long id) {
        Students existingStudent = studentsRepository.findById(id).orElse(students);
        existingStudent.setName(students.getName());
        existingStudent.setYearOfStudy(students.getYearOfStudy());
        existingStudent.setFaculty(students.getFaculty());
        return studentsRepository.save(existingStudent);
    }

    public String deleteStudent(long id) {
        studentsRepository.deleteById(id);
        return "Removed";
    }

    public List<Exam> getExams() {
        return examRepository.findAll();
    }

    public List<Exam> findByYoS(int yearOfStudy){
        return  examRepository.findByYearOfStudy(yearOfStudy);
    }

    public List<Exam> findByFaculty(String faculty) {
        return  examRepository.findByFaculty(faculty);
    }


}
