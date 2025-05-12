import { Component , Pipe } from '@angular/core';
import { AuthService } from './services/auth.service';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { catchError, concatMap } from 'rxjs/operators';
// import { Pipe } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Depression';
 message = " you are in that state";
  userlist: any = [];
 constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.getuserslist();
  }
 getuserslist(){
     this.auth.getUsers().subscribe((data) => {

      this.userlist = data
      console.log(data);
      debugger
      this.router.navigate(['dashboard'])
      // this.message = data;
    }, (error) => { 
      console.log(error);
    }
    );
 }

 getUserListByid()  {
 
  // this.auth.getUserList().pipe(
  //   concatMap((users : any) => {
  //     console.log(users), "userList";
  //     return this.auth.getUserById(users[0].id);
  //   }),
  //   catchError((error) => {
  //     console.log("Error fetching user", error);
  //     return [[]];
  //   })

  // ).subscribe((data : any) => { 
  //   console.log(data);
  // }
  // );

}}
