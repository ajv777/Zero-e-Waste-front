import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = ' http://localhost:3000/api'
   }

   allItems(): Promise<Item[]> {
     const httpOptions = { 
       headers: new HttpHeaders({
       "Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token', 'Access-Control-Allow-Credentials': 'true'})
     }
    // quitar httpsoptions 
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items`, httpOptions).toPromise();
  }


   ItemById(pItemId): Promise<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items/`+pItemId).toPromise();
  }

  
/* http://localhost:3000/api/items/2  */
}
