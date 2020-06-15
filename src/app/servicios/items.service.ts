import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://zeroewaste1.herokuapp.com/api'
   }

   allItems(): Promise<Item[]> {
     const httpOptions = { 
       headers: new HttpHeaders({
       "Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token', 'Access-Control-Allow-Credentials': 'true'})
     }
    // La que probaba en las PruebasApi.rest de la app de node
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items`, httpOptions).toPromise();
  }
}
