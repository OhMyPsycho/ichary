import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  // tslint:disable-next-line: ban-types
  error: String = '';

  constructor(private auths: AuthService) { }

  ngOnInit() {
  }

  async login() {
    await this.auths.login(this.loginForm.value).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
      switch (err.code) {
        case 'auth/invalid-email':
          this.error = 'Coloca un email valido';
          setTimeout(() => {
            this.error = '';
          }, 5000);
          break;
        case 'auth/wrong-password':
          this.error = 'Usuario o Contraseña incorrectos';
          setTimeout(() => {
            this.error = '';
          }, 5000);
          break;
      
        default:
          this.error = 'Por favor introdusca datos validos';
          setTimeout(() => {
            this.error = '';
          }, 5000);
          break;
      }
    })
  }
}
