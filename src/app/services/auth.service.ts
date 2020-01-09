import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { 

  }

  async login(data) {
    const promise = await new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
        resolve(res);
      }, err => reject(err));
    });

    return promise;
  }


  async register(data) {
    const promise = await new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(data.email, data.password).then(res => {
        resolve(res);
      }, err => reject(err));
    });

    return promise;
  }

  async saveUser(data) {

  }

  async lostpassword(data) {
    const promise = await new Promise((resolve, reject) => {
      this.auth.auth.sendPasswordResetEmail(data.email).then(res => {
        resolve(res);
      }, err => reject(err));
    });

    return promise;
  }

  async logout() {
    this.auth.auth.signOut()
  }

  getId() {
    return this.auth.auth.currentUser.uid;
  }

}
