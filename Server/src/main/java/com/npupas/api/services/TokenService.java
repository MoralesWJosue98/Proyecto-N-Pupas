package com.npupas.api.services;

import com.npupas.api.models.entities.Token;

public interface TokenService {
    Token getToken(String content);
}
