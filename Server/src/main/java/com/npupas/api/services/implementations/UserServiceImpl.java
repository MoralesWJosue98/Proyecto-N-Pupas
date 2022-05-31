package com.npupas.api.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.User;
import com.npupas.api.repositories.UserRepository;
import com.npupas.api.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public User getUser(Long id) {
		User foundUser = userRepository.findById(id).orElse(null);
		return foundUser;
	}

}
