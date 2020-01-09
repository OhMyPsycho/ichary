import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from "../../../models/users";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uid: string;
  userss: any = {
    level: 0
  };
  constructor(private users: UsersService, private auths: AuthService) { }

  ngOnInit() {
    this.uid = this.auths.getId();
    console.log(this.uid)
    this.hola();
  }

  async hola() {
    await this.users.getUserID(this.uid).subscribe(res => {
      this.userss = res;
      console.log(res);
    })
  }

}
