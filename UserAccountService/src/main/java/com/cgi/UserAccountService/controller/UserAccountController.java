package com.cgi.UserAccountService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.UserAccountService.exceptions.UserWithTheIDAlreadyPresentException;
import com.cgi.UserAccountService.exceptions.UserWithTheIDNotPresentException;
import com.cgi.UserAccountService.model.UserAccount;
import com.cgi.UserAccountService.service.UserAccountService;

@RestController
@RequestMapping("/api/vi")
public class UserAccountController {
    @Autowired
    private UserAccountService userAccountService;

    @GetMapping(value ="/accounts")
    public ResponseEntity<List<UserAccount>> getAllUserAccounts(){
        ResponseEntity<List<UserAccount>> responseEntity;
        List<UserAccount> userAccounts = userAccountService.getAllUserAccounts();
        responseEntity = new ResponseEntity<List<UserAccount>>(userAccounts, HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("/account/{userId}")
    public ResponseEntity<?> getUserByIdHandler(@PathVariable("userId") int id) throws UserWithTheIDNotPresentException {
        ResponseEntity<?> responseEntity;
        try {
            UserAccount userAccount = userAccountService.getUserAccountById(id);
            responseEntity = new ResponseEntity<UserAccount>(userAccount, HttpStatus.OK);
        }catch (UserWithTheIDNotPresentException e){
            responseEntity = new ResponseEntity<String>("User with ID not found", HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @PostMapping("/account")
    public ResponseEntity<?> addUserAccountHandler(@RequestBody UserAccount userAccount){
        ResponseEntity<?> responseEntity;
        try {
            UserAccount newUser = userAccountService.addNewUserAccount(userAccount);
            responseEntity = new ResponseEntity<UserAccount>(newUser, HttpStatus.CREATED);

        } catch (UserWithTheIDAlreadyPresentException e) {
            responseEntity = new ResponseEntity<String>("Failed to store the user account: Duplicate Resource", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping("/account/{userId}")
    public ResponseEntity<String> deleteUserAccountHandler(@PathVariable("userId") int id )throws UserWithTheIDNotPresentException{
        ResponseEntity<String> responseEntity;
        try {
            userAccountService.deleteUserAccount(id);
            responseEntity = new ResponseEntity<String>("User Account Deleted", HttpStatus.NO_CONTENT);
        }catch (UserWithTheIDNotPresentException e){
            responseEntity = new ResponseEntity<String>("User Account with ID not found", HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }

    @PutMapping("/account/{userId}")
    public ResponseEntity<?> updateUserHandler(@PathVariable("userId") int id) throws UserWithTheIDNotPresentException{
        ResponseEntity<?> responseEntity;
        try {
            UserAccount userAccount = userAccountService.updateUserAccount(userAccountService.getUserAccountById(id));
            responseEntity = new ResponseEntity<UserAccount>(userAccount, HttpStatus.OK);
        }catch (UserWithTheIDNotPresentException e){
            responseEntity = new ResponseEntity<String>("User Account with ID not found", HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
//    Endpoints
//
///api/v1/account/{userId} - GET –- get user account
///api/v1/account - POST –- create new account
///api/v1/account/{userId} - DELETE –- delete account
///api/v1/account/{userId} - PUT –- edit user account
}
