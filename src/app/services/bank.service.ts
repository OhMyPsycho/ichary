import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Banks } from '../models/banks';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private banksCollection: AngularFirestoreCollection<Banks>;
  banks: Observable<Banks[]>;
  constructor(db: AngularFirestore, private afs: AngularFirestore) {
    this.banksCollection = db.collection<Banks>('banks');
    this.banks = this.banksCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
   }

  getBankID(id: string) {
    return this.banksCollection.doc(id).valueChanges();
  }


}
