import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseurl + '/products/',
    {responseType: 'json',headers: this.httpHeaders})
  }

  createProducts(data: any): Observable<Products>{
    return this.http.post(this.baseurl + '/products/',data)
  }

  updateProduct(id: any, data:any): Observable<Products> {
    return this.http.patch(`${this.baseurl}/products/${id}`,data);
  }

  deleteProduct(id: any): Observable<Products> {
    return this.http.delete(`${this.baseurl}/products/${id}`);
  }
}
