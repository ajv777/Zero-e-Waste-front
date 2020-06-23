import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string;
  httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
    this.httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('userToken'),
      }),
    };
  }

  // Registro - works
  registro(formValues): Promise<any> {
    return this.httpClient
      .post<any>(`${this.baseUrl}/users`, formValues)
      .toPromise();
  }

  // Login - works
  login(formValues): Promise<any> {
    return this.httpClient
      .post<any>(`${this.baseUrl}/users/login`, formValues)
      .toPromise();
  }

  // User detail - works
  userById(): Promise<any> {
    const pUserId = localStorage.getItem('userId');
    return this.httpClient
      .get<any>(`${this.baseUrl}/users/` + pUserId, this.httpOptions)
      .toPromise();
  }

  // Update user by id - works
  updateUser(formValues): Promise<any> {
    const pUserId = localStorage.getItem('userId');
    return this.httpClient
      .put<any>(
        `${this.baseUrl}/users/` + pUserId,
        formValues,
        this.httpOptions
      )
      .toPromise();
  }

  // Delete user - works
  deleteUser(): Promise<any> {
    const pUserId = localStorage.getItem('userId');
    return this.httpClient
      .delete<any>(`${this.baseUrl}/users/` + pUserId, this.httpOptions)
      .toPromise();
  }
}
