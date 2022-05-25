package com.cgi.UserAccountService.model;

public class LoginUser {

private String username;
private String password;

public LoginUser(String username, String password) {
        this.username = username;
        this.password = password;
}
public LoginUser() {}
public String getUsername() {
        return username;
}
public void setUsername(String username) {
        this.username = username;
}
public String getPassword() {
        return password;
}
public void setPassword(String password) {
        this.password = password;
}
@Override
public String toString() {
        return "LoginUser [username=" + username + ", password=" + password + "]";
}        

}