import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    public getUser(email: string, password: string): Observable<ProductInterface> {
        return this.http.get<ProductInterface>(`http://localhost:3000/users?email=${email}&password=${password}`);
    }
}