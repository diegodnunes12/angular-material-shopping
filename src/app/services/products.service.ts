import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getAllProducts(): Observable<ProductInterface[]> {
        return this.http.get<ProductInterface[]>("http://localhost:3000/products");
    }

    public updateProduct(product: ProductInterface): Observable<ProductInterface[]> {
        return this.http.patch<ProductInterface[]>("http://localhost:3000/products", product);
    }
}