import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PuntosLimpiosService {
  baseUrl: string;
  httpOptions: any;

  constructor(private httpClient: HttpClient) {
    // this.baseUrl = 'http://localhost:3000/api';
    this.baseUrl = 'https://zeroewasteapp.herokuapp.com/api';
    this.httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('userToken'),
      }),
    };
  }
  allEpoints(): Promise<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/epoints`, this.httpOptions)
      .toPromise();
  }
}
