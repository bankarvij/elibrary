package hu.library.eLibrary.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.library.eLibrary.dao.LoginRepository;
import hu.library.eLibrary.model.User;
import hu.library.eLibrary.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginRepository loginRepository;

	@Override
	public User login(User user) {
		return loginRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword());
	}

}

