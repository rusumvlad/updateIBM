package com.example.controller;

import com.example.persistance.entity.Exam;
import com.example.persistance.entity.Students;
import com.example.service.function.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentsController {

    @Autowired
    StudentsService studentsService;

    @RequestMapping(value = "/students", method = RequestMethod.GET)
    public List<Students> exams() {
        return studentsService.getStudents();
    }
    @PostMapping("/addStudent")
    public Students createStudent(@RequestBody Students students) {

        return studentsService.createStudents(students);
    }

    @DeleteMapping("/deleteStudent/{id}")
    public String deleteStudent(@PathVariable long id) {
        return studentsService.deleteStudent(id);
    }

    @GetMapping("/students/exams")
    public List<Exam> findExams() {
        return studentsService.getExams();
    }

    @PutMapping("/updateStudents/{id}")
    public Students updateStudent(@RequestBody Students students, @PathVariable long id) {
        return studentsService.updateStudent(students,id);
    }

    @GetMapping("/students/exams/{yearOfStudy}")
    public List<Exam> findExamsYearOfStudy(@PathVariable int yearOfStudy) {
        return studentsService.findByYoS(yearOfStudy);
    }

    @GetMapping("/students/{faculty}")
    public List<Exam> findExamsFaculty(@PathVariable String faculty) {
        return studentsService.findByFaculty(faculty);
    }
}
