package com.npupas.api.utils;

import com.npupas.api.models.entities.Admin;
import com.npupas.api.models.entities.Token;
import com.npupas.api.repositories.TokenRepository;

public class ControllersUtils {
    TokenRepository tokenRepository;

    public static Admin searchAdminUser(TokenRepository tokenRepository, String token) {
        Token tokenObj = tokenRepository.findByContent(token.substring(7));
        Admin adminUser = tokenObj.getUser().getAdmin();

        return adminUser;
    }
}
