import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api'
   }

   // All Items - works
  allItems(): Promise<Item[]> {
     const httpOptions = { 
       headers: new HttpHeaders({
       "Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token', 'Access-Control-Allow-Credentials': 'true'})
  }
    // quitar httpsoptions 
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items`, httpOptions).toPromise();
  }

  // Detalle de un producto - works
  ItemById(pItemId): Promise<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items/`+pItemId).toPromise();
  }

  // Subir un nuevo producto - works
  UpItem(formValues): Promise<any> {
    formValues.hand_delivery = (formValues.hand_delivery === true) ? 1 : 0 ;
    formValues.post_delivery = (formValues.post_delivery === true) ? 1 : 0 ;
    /* console.log(formValues) */
  return this.httpClient.post(`${this.baseUrl}/items`, formValues).toPromise();
  }

  // Lista de items por categoría
  ItemsByCategory(pCatName): Promise<Item[]> {
    return this.httpClient.get<Item[]>(`${this.baseUrl}/items/by-cat`+pCatName).toPromise();
  }

}
