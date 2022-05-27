import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {UserAccount} from "../models/UserAccount";



@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private baseUrl="http://localhost:8080/api/v1/accounts";

  constructor(private httpClient: HttpClient) { }

  getAllUserAccounts(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/api/v1/accounts");
  }
  getUserAccountById(id:number):Observable<UserAccount> {
    return this.httpClient.get<UserAccount>(`${this.baseUrl}/${id}`);
  }


  addNewUserAccount(userAccount: UserAccount ): Observable<UserAccount>{
    return this.httpClient.post<UserAccount>(`http://localhost:8080/api/v1/accounts`, userAccount)
  }

  updateUserAccount(userAccount: UserAccount){
    return this.httpClient.put<UserAccount>("http://localhost:8080/api/v1/accounts/"+userAccount.userId, userAccount)
  }
  deleteUserAccount(userAccount: UserAccount){
    return this.httpClient.delete<UserAccount>("http://localhost:8080/api/v1/product/"+userAccount.userId);
  }

}
