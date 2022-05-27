import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,
    private authentication: AuthenticationService){}

    getAllProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(`http://localhost:9000/api/v1/product`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authentication.getToken()}`)
      });
    }
  
    addNewProduct(product: Product ): Observable<Product>{
      return this.httpClient.post<Product>(`http://localhost:9000/api/v1/product`, product, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authentication.getToken()}`)
      })
    }
  
    updateProduct(product: Product){
      return this.httpClient.put<Product>(`http://localhost:9000/api/v1/product/${product.id}`, product, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authentication.getToken()}`)
      })
    }
  
    getProductById(id:number):Observable<Product> {
      return this.httpClient.get<Product>(`http://localhost:9000/api/v1/product/${id}`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authentication.getToken()}`)
      });
    }
  
    deleteProduct(id: number){
      return this.httpClient.delete<Product>(`http://localhost:9000/api/v1/product/${id}`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authentication.getToken()}`)
      });
    }
  
}
