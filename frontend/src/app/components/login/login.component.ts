import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  form: FormGroup | any;
  constructor(private formBuilder:FormBuilder,
              private http: HttpClient,
              private router: Router){

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : '',
      password : ''
    })
  }

  submit(): void{
    this.http.post('https://grocery-store-django-rest.vercel.app/login',this.form.getRawValue(), {withCredentials: true})
      .subscribe(
        // res => console.log(res),
      //  res => localStorage.setItem('token', JSON.stringify(res))
        () => this.router.navigate(['/'])
      );
        
        
    // .pipe(
    //   tap(res => localStorage.setItem('token', JSON.stringify(res)))

    //   // shareReplay()
    // );


    // .pipe(
    //   map(response => {
    //     localStorage.setItem('JWT_Token', '${response.jwt}');
    //     // this.isLoggedIn = true;
    //     return true;
    //   }),
    //   catchError(error => {
    //     console.log(error);
    //     // this.isLoggedIn = false;
    //     return of(false);
    //   }));

    
  }

}
