import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export interface user {
  id: number;
  name: string;
}


@Injectable({
  providedIn: 'root'
})



export class AuthService {
  

  private Url = 'http://Localhost:3000/users';

  private userSubject = new BehaviorSubject<user[]>([]);
  userlist$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }


  register(user : unknown) : Observable<unknown>{

    return this.http.post(this.Url, user)
  }



  getUsers(): Observable<unknown> {
    return this.http.get(this.Url);
  }

  getUserList(): void {
 
    this.http.get<user[]>(this.Url).pipe(
      catchError((error)=>{

        console.log("Error fetching users", error);
        return [[]];
      })).subscribe((data)=>{

       this.userSubject.next(data);
console.log("User list updated", data);
return data;
      })}

    
getUserById(id: number): Observable<user> {

   this.http.get<user>(`${this.Url}/${id}`).pipe(
    catchError((error) => { 
      console.log("Error fetching user", error);
      return [[]];
    }
    )).subscribe((result : any) => {
      this.userSubject.next(result);
      console.log("User fetched", result);
    }
    );
  return this.http.get<user>(`${this.Url}/${id}`);

  }



}
