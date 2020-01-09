import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  recoveryForm = new FormGroup({
    email: new FormControl('')
  });
  error: String = '';

  constructor(private auths: AuthService) { }

  ngOnInit() {
  }


  async recovery() {
    await this.auths.login(this.recoveryForm.value.email).then(res => {
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
