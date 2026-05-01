import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http: HttpClient ) { }
  getproducts() {
    return this.http.get('https://69ceb12533a09f831b7ddecf.mockapi.io/api/cars');
  }
  getproductsbyid(id: number) {
    
    return this.http.get(`https://69ceb12533a09f831b7ddecf.mockapi.io/api/cars?id=${id}`);
    
  }
}
