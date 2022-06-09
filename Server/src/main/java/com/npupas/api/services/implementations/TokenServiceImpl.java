package com.npupas.api.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npupas.api.repositories.TokenRepository;
import com.npupas.api.services.TokenService;
import com.npupas.api.models.entities.Token;

@Service
public class TokenServiceImpl implements TokenService{
    @Autowired
    TokenRepository tokenRepository;

    @Override
    public Token getToken(String content) {
        Token token = tokenRepository.findByContent(content);
        return token;
    }
}
