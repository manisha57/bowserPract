import { Component, OnInit } from '@angular/core';
import {AuthenticationService,UserDetails} from '../authentication.service'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  details : UserDetails 
  constructor(private auth : AuthenticationService) { }

  ngOnInit(){
    this.auth.employee().subscribe(
      user => {
        this.details =user
      },
      err =>{
        console.error(err);
      }

    )
  }

}
