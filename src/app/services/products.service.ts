import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( 
    private http: HttpClient
  ) { }

  getDataProducts(): Observable<Product[]> {
    const headers = new HttpHeaders().set("authorId", "1000");
    console.log('holaa allison, aqui estan los productos')
    return this.http.get<Product[]>("https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products", {headers})
  }

}
