package com.cgi.UserAccountService.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cgi.UserAccountService.exceptions.UserWithTheIDAlreadyPresentException;
import com.cgi.UserAccountService.exceptions.UserWithTheIDNotPresentException;
import com.cgi.UserAccountService.model.UserAccount;
import com.cgi.UserAccountService.repository.UserAccountRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

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
        Optional<UserAccount> optional2 = userAccountRepository.findByUsernameAndPassword(userAccount.getUsername(), userAccount.getPassword());

        if(optional2.isEmpty()){
            userAccountRepository.save(userAccount);
            return userAccount;
        } else {
        throw new UserWithTheIDAlreadyPresentException();  }
        }

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
    
    public UserAccount verifyUser(String username, String password)  throws UserWithTheIDNotPresentException{
    	// TODO Auto-generated method stub
    	Optional<UserAccount> userOptional= userAccountRepository.findByUsernameAndPassword(username, password);
    	if(userOptional.isPresent()) {
    		return userOptional.get();
    	}
    	throw new UserWithTheIDNotPresentException();
    	}

    	public String generateToken(UserAccount user) {
    	// TODO Auto-generated method stub
    	String jwtToken;
    	jwtToken = Jwts.builder()
    	.setSubject(Integer.toString(user.getUserId()))
//    	.setClaims()
    	.setIssuedAt(new Date())
    	.setExpiration(new Date(System.currentTimeMillis() + 5000000))
    	.signWith(SignatureAlgorithm.HS256, "stackroute")
    	.compact();

    	return jwtToken;
    	}

}
