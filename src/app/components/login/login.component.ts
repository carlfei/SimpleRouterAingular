import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


interface User {
  email: string;
  password: string;
  isLogged: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentUser?: User;
  userAdmin: User = { email: 'admin@core.net', password: '1234',isLogged:true }

  constructor(private _route:Router){ }

  sendLog(miForm: NgForm) {
    this.currentUser = { email: miForm.value.email, password: miForm.value.password,isLogged:false };
    if (this.currentUser.email === this.userAdmin.email && this.currentUser.password === this.userAdmin.password)
      this.currentUser.isLogged = true;
    if(this.currentUser.isLogged) 
      this._route.navigate(['home',this.currentUser.email,this.currentUser.password]);
  }
}
