import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  constructor(db: AngularFirestore, private afs: AngularFirestore) {
    this.userCollection = db.collection<Users>('Users');
    this.users = this.userCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
   }

  getUserID(id: string) {
    return this.userCollection.doc(id).valueChanges();
  }

  getUserFormUsername(username: string) {
    return this.afs.collection('Users', ref => ref.where('username', '==', username));
  }

  getUsers() {
    return this.users;
  }

}


