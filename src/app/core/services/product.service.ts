import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/products';
import { environment } from '../../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<{listCard: Product[]}>(environment.api)
    .pipe(
      map(response => response.listCard)
    );
  }

}