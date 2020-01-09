import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  uid: string;
  banka: any;
  constructor(private banks: BankService, private auths: AuthService) { }

  ngOnInit() {
    this.uid = this.auths.getId();
    this.banks.getBankID(this.uid).subscribe(res => {
      //this.banka = res;
      console.log(res);
    });
  }

}
