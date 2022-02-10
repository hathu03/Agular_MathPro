import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url='http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.api_url);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.api_url+'/delete/'+id)
  }

  getUser(id:number):Observable<any>{
    return this.http.get(this.api_url+'/detail/'+id)
  }

  update(data: any, id: number | undefined):Observable<any>{
    return this.http.post(this.api_url+'/update/'+id,data)
  }

}
