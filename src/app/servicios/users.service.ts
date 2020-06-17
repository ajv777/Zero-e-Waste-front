import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

baseUrl: string;

constructor (private httpClient: HttpClient) { 

  this.baseUrl = 'http://localhost:3000/api';
  
}

// Registro - works
registro(formValues): Promise<any> {
  return this.httpClient.post<any>(`${this.baseUrl}/users`, formValues).toPromise();
}

// Login - In process
login(formValues): Promise<any> {
  return this.httpClient.post<any>(`${this.baseUrl}/login`, formValues).toPromise();
}

// Detalle de un usuario - NO works
UserById(pUserId): Promise<any> {
  return this.httpClient.get<any>(`${this.baseUrl}/users/`+pUserId).toPromise();
}

// Update user by id - NO works
UpdateUser(formValues): Promise<any> {
  return this.httpClient.put<any>(`${this.baseUrl}/users`, formValues).toPromise();
}

}
