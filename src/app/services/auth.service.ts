import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post(environment.api + "auth/login",data);
  }

  logout(): Observable<any>{
    let token = localStorage.getItem('token')
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.post(environment.api + "auth/logout",null,{headers: headers_object});
  }
}
