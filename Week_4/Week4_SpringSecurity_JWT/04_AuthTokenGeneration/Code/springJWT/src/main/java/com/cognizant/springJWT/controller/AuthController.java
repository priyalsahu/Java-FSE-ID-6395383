package com.cognizant.springJWT.controller;

import com.cognizant.springJWT.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        String[] parts = authHeader.split(" ");
        String decoded = new String(Base64.getDecoder().decode(parts[1]));
        String[] credentials = decoded.split(":");

        String username = credentials[0];
        String password = credentials[1];

        if ("user".equals(username) && "pwd".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}
