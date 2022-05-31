package com.npupas.api.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.models.entities.Pupuseria;
import com.npupas.api.repositories.PupuseriaRepository;
import com.npupas.api.services.PupuseriaService;

@Service
public class PupuseriaServiceImpl implements PupuseriaService {

	@Autowired
	PupuseriaRepository pupuseriaRepository;

	@Override
	public Pupuseria getPupuseria(Long id) {
		Pupuseria foundPupuseria = pupuseriaRepository.findById(id).orElse(null);

		return foundPupuseria;
	}

}
