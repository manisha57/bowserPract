import { Component, OnInit } from '@angular/core';
import {AuthenticationService,TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  credentials : TokenPayload ={
    id: 0 ,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address:'',
    dob: 12,
    company: ''
  }
  constructor(private auth: AuthenticationService,private router: Router) { }

  ngOnInit() {
  }
  register(){
    this.auth.register(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/employee')
      },
      err =>{
        console.error(err)
      }
    )
  }
}
