import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getAllProducts(): Observable<ProductInterface[]> {
        return this.http.get<ProductInterface[]>("https://fakestoreapi.com/products");
    }
}