import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    /**
     * Pelas espeficicacoes do json server ele retorna um array quando buscamos por paramentros
     * Não é correto recuperar o usuário passando o email e senha via GET. É apenas um estudo de caso
     * @param email 
     * @param password 
     * @returns 
     */
    public getUsers(email: string, password: string): Observable<UserInterface[]> {
        return this.http.get<UserInterface[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
    }

    public getUser(id: number): Observable<UserInterface> {
        return this.http.get<UserInterface>(`http://localhost:3000/users/${id}`);
    }
}