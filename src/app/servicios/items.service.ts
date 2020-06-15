import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://zeroewaste1.herokuapp/api/'

   }

   registro(formValues): Promise<any> {
    // La que probaba en las PruebasApi.rest de la app de node
    return this.httpClient.get(`${this.baseUrl}/items`, formValues).toPromise();
  }
}
