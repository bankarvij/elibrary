package hu.library.eLibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import hu.library.eLibrary.model.User;

public interface LoginRepository extends JpaRepository<User, Long>{
	User findByUserNameAndPassword(String userName, String password);
}
