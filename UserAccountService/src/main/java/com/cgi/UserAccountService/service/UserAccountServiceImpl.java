package com.cgi.UserAccountService.service;

import com.cgi.UserAccountService.exceptions.UserWithTheIDAlreadyPresentException;
import com.cgi.UserAccountService.exceptions.UserWithTheIDNotPresentException;
import com.cgi.UserAccountService.model.UserAccount;
import com.cgi.UserAccountService.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService{
    @Autowired
    private UserAccountRepository userAccountRepository;
    @Override
    public List<UserAccount> getAllUserAccounts() {
        return userAccountRepository.findAll();
    }

    @Override
    public UserAccount getUserAccountById(int id) throws UserWithTheIDNotPresentException {
        Optional<UserAccount> optional = userAccountRepository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }
        throw new UserWithTheIDNotPresentException();
    }

    @Override
    public UserAccount addNewUserAccount(UserAccount userAccount) throws UserWithTheIDAlreadyPresentException {
        Optional<UserAccount> optional = userAccountRepository.findById(userAccount.getUserId());
        if(optional.isEmpty()){
            userAccountRepository.save(userAccount);
            return userAccount;
        }
        throw new UserWithTheIDAlreadyPresentException();    }

    @Override
    public void deleteUserAccount(int id) throws UserWithTheIDNotPresentException {
        Optional<UserAccount> optional = userAccountRepository.findById(id);
        if (optional.isPresent()){
            optional.get();
        }
        throw new UserWithTheIDNotPresentException();
    }

    @Override
    public UserAccount updateUserAccount(UserAccount userAccount) throws UserWithTheIDNotPresentException {
        Optional<UserAccount> userAccountOptional = userAccountRepository.findById(userAccount.getUserId());
        if (userAccountOptional.isPresent()){
            userAccountOptional.get().setUserId(userAccount.getUserId());
            userAccountOptional.get().setUsername(userAccount.getUsername());
            userAccountOptional.get().setPassword(userAccount.getPassword());
            userAccountOptional.get().setEmail(userAccount.getEmail());
            userAccountOptional.get().setRole(userAccount.getRole());
            userAccountRepository.save(userAccountOptional.get());
            return userAccountOptional.get();
        }
        throw new UserWithTheIDNotPresentException();
    }



}
