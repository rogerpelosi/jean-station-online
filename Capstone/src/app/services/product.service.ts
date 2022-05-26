import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="http://localhost:8080/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/api/v1/product");
  }

  addNewProduct(product: Product ): Observable<Product>{
    return this.httpClient.post<Product>(`http://localhost:8080/api/v1/product`, product)
  }

  updateProduct(product: Product){
    return this.httpClient.put<Product>("http://localhost:8080/api/v1/product/"+product.id, product)
  }

  getProductById(id:number):Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  deleteProduct(product: Product){
    return this.httpClient.delete<Product>("http://localhost:8080/api/v1/product/"+product.id);
  }

}
