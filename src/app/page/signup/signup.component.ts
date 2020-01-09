import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    emailConfirm: new FormControl('')
  })
  
  constructor(private route: ActivatedRoute) {
    // const id: Observable<string> = route.params.pipe(map(p => p.ref));
    this.route.params.subscribe(res => {
      console.log(res.ref)
    })
   }

  ngOnInit() {
  }

  signup() {
    console.log(this.signupForm.value)
  }

}
