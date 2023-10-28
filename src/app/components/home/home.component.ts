import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _ar:ActivatedRoute){
    this.recoupData()
  }

  recoupData(){

    const {email,password} = this._ar.snapshot.params;
    const user = this._ar.snapshot.params;
    console.log(user['email']);
    console.log(email);
    console.log(password);
    console.log(user['password']);
  }

}
