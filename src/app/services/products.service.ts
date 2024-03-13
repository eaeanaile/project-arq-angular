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
    const headers = new HttpHeaders().set('authorId', '100');
    return this.http.get<Product[]>('https://tribu-ti-staffing-desarrolloafangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros', {headers})
  }

}
