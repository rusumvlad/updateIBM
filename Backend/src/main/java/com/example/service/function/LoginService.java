package com.example.service.function;

import com.example.persistance.entity.Login;
import com.example.persistance.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public List<Login> getUser() {
        return loginRepository.findAll();
    }

    public Login createUser(Login login) {
        return loginRepository.save(login);
    }

    public Login updateUser(Login login, long id) {
        Login existingLogin = loginRepository.findById(id).orElse(login);
        existingLogin.setUsername(login.getUsername());
        existingLogin.setPassword(login.getPassword());
        existingLogin.setUsertype(login.getUsertype());
        return loginRepository.save(existingLogin);
    }

    public String deleteUser(long id) {
        loginRepository.deleteById(id);
        return "Removed";
    }
}