import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

import {AuthenticationService} from './authentication.service'
import {AuthGuardService} from './auth-guard.service'



const routes: Routes = [
  {path: 'login',  component:LoginComponent, },
  {path: 'register',  component:RegisterComponent, },
  {path: 'employee',  component:EmployeeComponent, canActivate: [AuthGuardService] },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
