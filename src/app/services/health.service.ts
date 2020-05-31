import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Health } from '../interface/health';
import { User } from 'src/app/interface/user';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private healthCollection: AngularFirestoreCollection<Health>;
  private user: User;
  private health: Health;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private healthService: HealthService) {
    this.healthCollection = this.afs.collection<Health>('Users/' + this.authService.getAuth().currentUser.uid + '/Health');
  }

  addHealth(health: Health) {
    return this.healthCollection.doc(health.data).set(health);
  }
  // listar health do user especifico  / pegar informacoes do documento
  getHealths() {
    return this.healthCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // pega o doc e usa o user ID
          const userId = a.payload.doc.id;
          return { userId, ...data };
        })
      })
    )

  }

  getHealth(id: string) {
    return this.healthCollection.doc<Health>(id).valueChanges();
  }

}
