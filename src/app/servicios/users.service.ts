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

// Registro works
registro(formValues): Promise<any> {
  return this.httpClient.post(`${this.baseUrl}/users`, formValues).toPromise();
}

// Falta definir login pasando el token
login(formValues): Promise<any> {
  return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
}

}
