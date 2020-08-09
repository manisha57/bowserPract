import { Component, OnInit } from '@angular/core';
import {AuthenticationService,TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  credentials : TokenPayload ={
    id: 0 ,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address:'',
    dob: 2020,
    company: '',
  }

  constructor(private auth: AuthenticationService,private router: Router) { }

  ngOnInit(){
  }

  login(){
    this.auth.login(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/employee')
      },
      err =>{
        console.error(err)
      }
    )
  }

}
