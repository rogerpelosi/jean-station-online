package com.cgi.UserAccountService.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.UserAccountService.exceptions.UserWithTheIDAlreadyPresentException;
import com.cgi.UserAccountService.exceptions.UserWithTheIDNotPresentException;
import com.cgi.UserAccountService.model.LoginUser;
import com.cgi.UserAccountService.model.UserAccount;
import com.cgi.UserAccountService.service.UserAccountService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/api/v1")
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

    @GetMapping("/accounts/{userId}")
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
    @PostMapping("/accounts/signup")
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
    
    @PostMapping("/accounts/login")
    public ResponseEntity<?> loginHandler(@RequestBody LoginUser loginUser ){

    	ResponseEntity<?> responseEntity;

    	Map<String, String> tokenMap = new HashMap<>();

    	try {
        	UserAccount userAccount = userAccountService.verifyUser(loginUser.getUsername(),loginUser.getPassword());

            
        	// 
        	String token = userAccountService.generateToken(userAccount);
        	tokenMap.put("token", token);
        	responseEntity = new ResponseEntity<Map<String, String>>(tokenMap,HttpStatus.OK);
    	} catch(UserWithTheIDNotPresentException e) {
    	tokenMap.clear();
    	tokenMap.put("token", null);
    	tokenMap.put("message", "Invalid User Credentials");
    	responseEntity = new ResponseEntity<Map<String,String>>(tokenMap,HttpStatus.FORBIDDEN);
    	}

    	return responseEntity;
    	// return forbidden response;

    	}
    
    @PostMapping("/accounts/isAuthenticated")
	public ResponseEntity<Map<String,Object>> verifyToken(@RequestHeader("Authorization") String authHeader){
		System.out.println("Request received");
		
		ResponseEntity<Map<String, Object>> responseEntity;
		HashMap<String, Object> map = new HashMap<>();
		map.clear();
		System.out.println(authHeader);
		String token = authHeader.split(" ")[1];
		try {
			Claims claims =  Jwts.parser()
			.setSigningKey("stackroute")
			.parseClaimsJws(token)
			.getBody();
			map.put("isAuthenticated", true);
			map.put("userId", claims.getSubject());
			responseEntity = new ResponseEntity<Map<String,Object>>(map,HttpStatus.OK);
			
		}catch(Exception e) {
			map.put("isAuthenticated", false);
			responseEntity = new ResponseEntity<Map<String,Object>>(map,HttpStatus.FORBIDDEN);
		}
		
		return responseEntity;
		
	}


    @DeleteMapping("/accounts/{userId}")
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

    @PutMapping("/accounts/{userId}")
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
