import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'http://Localhost:3000/users';
  constructor(private http: HttpClient) { }


  register(user : any) : Observable<any>{

    return this.http.post(this.Url, user)
  }

  getUsers(): Observable<any> {
    return this.http.get(this.Url);
  }



}
