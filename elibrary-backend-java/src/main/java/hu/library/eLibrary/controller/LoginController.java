package hu.library.eLibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.library.eLibrary.model.User;
import hu.library.eLibrary.service.LoginService;

@CrossOrigin
@RestController
@RequestMapping(path = "/library")
public class LoginController {
	
	@Autowired
	private LoginService loginService;

	@PostMapping(path = "/login")
	public User login(@RequestBody User user) {
		return loginService.login(user);
	}
}
