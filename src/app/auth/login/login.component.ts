import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private route: Router) { }

  public email: any;
  public password: any;

  ngOnInit(): void {

  }

  handleLogin() {
    this._AuthService.Login({ email: this.email, password: this.password }).subscribe(response => {
      console.log('data:', response.data);
      if (response.status === 200) {
        alert("logged in successfully");
        this.route.navigate(['']);
      } else if (response.status === 401) {
        alert("invalid username or password")
        console.error('Request failed with status:', response.status); // Log the error status
      }
    })
  }
}
