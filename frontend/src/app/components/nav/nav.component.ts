import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  authenticated = false

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    Emitters.authEmitters.subscribe(
      (auth:boolean)=> {
          this.authenticated = auth;
      }
    )

  }

  logout():void{
    this.http.post('https://grocery-store-django-rest.vercel.app/logout',{}, {withCredentials: true})
    .subscribe( ()=> this.authenticated = false);
  }
}
