import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Paises } from '../../../environments/paises';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-nosponsor',
  templateUrl: './nosponsor.component.html',
  styleUrls: ['./nosponsor.component.scss']
})

export class NosponsorComponent implements OnInit {

  paises = Paises;
  nosponsor1Form = new FormGroup({
    username: new FormControl(''),
  });
  nosponsor2Form = new FormGroup({
    country: new FormControl('')
  })
  constructor(private users: UsersService, private route: Router) { }

  ngOnInit() {
    console.log(this.paises);
    this.getUsers();
  }

  nosponsor1() {
    this.users.getUserFormUsername(this.nosponsor1Form.value.username).valueChanges().subscribe(res => {
      console.log(res);
      if (res.length === 0) {
        console.log('Su usuario no existe')
      } else {
        this.route.navigate(['signup', this.nosponsor1Form.value.username]);
      }
    });
  }

  async getUsers() {
    await this.users.getUsers().subscribe(res => {
      console.log(res);
    })
  }

}
