import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string;
  httpOptions: any;
  isLogged: boolean;
  users: [];

  constructor(private httpClient: HttpClient) {
    this.users = [];
    this.baseUrl = 'http://localhost:3000/api';
    this.httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('userToken'),
      }),
    };
    if (localStorage.getItem('isLogged')) {
      this.isLogged = JSON.parse(localStorage.getItem('isLogged'));
    } else {
      this.isLogged = false;
    }
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

  // Login2- NO va
  loginDos(formValues): Promise<any> {
    /*     let userFound = formValues;
    if (userFound) {
      this.isLogged = true;
      this.saveLoggedStatus();
    } */
    return this.httpClient
      .post<any>(`${this.baseUrl}/users/login`, formValues)
      .toPromise();
  }

  /*   logout() {
    this.isLogged = false;
    this.saveLoggedStatus();
  } */

  /*   saveLoggedStatus() {
    localStorage.setItem('isLogged', JSON.stringify(this.isLogged));
  } */

  // All users - works
  allUsers(): Promise<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/users`, this.httpOptions)
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
