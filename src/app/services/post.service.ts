import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  api_url = 'http://127.0.0.1:8000/api/posts'

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.api_url);
  }
}
