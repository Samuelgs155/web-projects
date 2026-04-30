import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebArticlesService {
  constructor(private http: HttpClient) { }

  sendWebBack() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?_limit=3');
  }
}
