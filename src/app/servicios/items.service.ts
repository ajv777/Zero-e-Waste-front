import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  baseUrl: string;
  httpOptions: any;

  constructor(private httpClient: HttpClient) {
    //this.baseUrl = 'http://localhost:3000/api';
    this.baseUrl = 'https://zeroewasteapp.herokuapp.com/api';
    this.httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('userToken'),
      }),
    };
  }

  // All Items - works
  allItems(): Promise<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/items`, this.httpOptions)
      .toPromise();
  }

  // Item detail - works
  itemById(pItemId): Promise<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/items/` + pItemId, this.httpOptions)
      .toPromise();
  }

  // Create new item - works
  UpItem(formValues): Promise<any> {
    /* console.log(formValues) */
    return this.httpClient
      .post(`${this.baseUrl}/items`, formValues, this.httpOptions)
      .toPromise();
  }

  // Categories names - works
  getCategories(): Promise<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/cats/`, this.httpOptions)
      .toPromise();
  }

  // Items for each user - works
  itemsByIdUser(): Promise<any> {
    const pUserId = localStorage.getItem('userId');
    return this.httpClient
      .get<any>(`${this.baseUrl}/items/by-user/` + pUserId, this.httpOptions)
      .toPromise();
  }

  // Delete item - works
  deleteById(pItemId): Promise<any> {
    return this.httpClient
      .delete<any>(`${this.baseUrl}/items/` + pItemId, this.httpOptions)
      .toPromise();
  }

  // Update item - works
  updateItemById(pItemId, formValues): Promise<any> {
    return this.httpClient
      .put<any>(
        `${this.baseUrl}/items/` + pItemId,
        formValues,
        this.httpOptions
      )
      .toPromise();
  }

  // Get item by id and this user
  itemAndUser(pItemId): Promise<any> {
    return this.httpClient
      .get<any>(
        `${this.baseUrl}/items/user-detail/` + pItemId,
        this.httpOptions
      )
      .toPromise();
  }
}
