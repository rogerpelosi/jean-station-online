package com.cgi.UserAccountService.service;

import com.cgi.UserAccountService.exceptions.UserWithTheIDAlreadyPresentException;
import com.cgi.UserAccountService.exceptions.UserWithTheIDNotPresentException;
import com.cgi.UserAccountService.model.UserAccount;
import org.apache.catalina.User;

import java.util.List;

public interface UserAccountService {
    List<UserAccount> getAllUserAccounts();
    UserAccount getUserAccountById(int id) throws UserWithTheIDNotPresentException;
    UserAccount addNewUserAccount(UserAccount userAccount) throws UserWithTheIDAlreadyPresentException;
    void deleteUserAccount(int id) throws UserWithTheIDNotPresentException;
    UserAccount updateUserAccount(UserAccount userAccount) throws UserWithTheIDNotPresentException;


    //    Endpoints
//
///api/v1/account/{userId} - GET –- get user account
///api/v1/account - POST –- create new account
///api/v1/account/{userId} - DELETE –- delete account
///api/v1/account/{userId} - PUT –- edit user account
}
