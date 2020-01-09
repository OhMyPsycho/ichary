import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  uid: string;
  usersInfo;
  constructor(
    private auths: AuthService,
    private users: UsersService
    ) { }

  async ngOnInit() {
    this.uid = await this.auths.getId();
    this.users.getUserID(this.uid).subscribe(res => {
      this.usersInfo = res;
      console.log(res);
    });
  }

}
