import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Depression';
 message = " you are in that state";
  userlist: Array<any> = [];
 constructor(private auth: AuthService) { }
  ngOnInit() {
    this.getuserslist();
  }
 getuserslist(){
     this.auth.getUsers().subscribe((data) => {

      this.userlist = data
      console.log(data);
      // this.message = data;
    }, (error) => { 
      console.log(error);
    }
    );
 }
}
