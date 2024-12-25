import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  message = "You are not logged in.";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    console.log(this.httpHeaders);
    this.http.get('http://127.0.0.1:8000/user', {withCredentials: true})
    .subscribe(
      res => {console.log(res)}
      // (res:any) => {
      //   this.message = res;//'Hi ${res.name}';
      // Emitters.authEmitters.emit(value:true)
      // }
    //   error: (e) => console.error(e)
    // //  err:Error => {
    // //     this.message = "You are not logged in.";
            // Emitters.authEmitters.emit(value:false)
    // //   }
    );
  }

}
