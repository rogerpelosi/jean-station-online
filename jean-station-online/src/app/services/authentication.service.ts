import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient){}

  authenticateUser(user: any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:9000/api/v1/accounts/login`, user);
  }

  authenticateToken(token: any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:9000/api/v1/accounts/isAuthenticated`, {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  setToken(token: string){
    localStorage.setItem('JeanBearerToken', token);
  }

  getToken(){
    return localStorage.getItem('JeanBearerToken');
  }

  removeToken(){
    localStorage.clear();
  }

  setUserRole(role: string){
    localStorage.setItem('JeansRole', role);
  }

  getUserRole(){
    return localStorage.getItem('JeansRole')
  }

}
