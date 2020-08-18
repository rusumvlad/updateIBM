package com.example.controller;

import com.example.persistance.entity.Login;
import com.example.service.function.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/login/users")
    public List<Login> findELogin() {

        return loginService.getUser();
    }

    @PostMapping("/login/addUser")
    public Login createLogin(@RequestBody Login login) {
        return loginService.createUser(login);
    }

    @PutMapping("/updateUser/{id}")
    public Login updateUser(@RequestBody Login login, @PathVariable long id) {
        return loginService.updateUser(login,id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable long id) {

        return loginService.deleteUser(id);
    }
}
