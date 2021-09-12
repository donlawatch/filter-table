import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  categories_api = 'https://api.publicapis.org/categories'
  constructor(private httpClient: HttpClient) { }

  public getCategories():Observable<any> {
    return this.httpClient.get(this.categories_api)
  }
}
