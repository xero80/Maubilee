import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'maubilee'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['dashboard'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}