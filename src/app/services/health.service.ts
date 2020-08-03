import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Health } from "../interface/health";
import { User } from "src/app/interface/user";
import { map, takeLast } from "rxjs/operators";
import * as firebase from "firebase";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseApp } from "@angular/fire";
import { using } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HealthService {
  public healthCollection: AngularFirestoreCollection<Health>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.healthCollection = this.afs.collection<Health>(
      "Users/" + this.authService.getAuth().currentUser.uid + "/Health"
    );
    //const userID = this.authService.getAuth().currentUser.uid;
    //const doc_ref = firebase.collection('my_collection').document('my_document')
    //this.healthCollection = this.afs.collection<Health>(this.authService.getAuth().currentUser.uid);
  }

  async checkExists(today: string) {
    let existsDoc: boolean;

    await this.healthCollection
      .doc(today)
      .get()
      .toPromise()
      .then(function (doc) {
        if ((doc.exists == true)) {
          existsDoc = true;
        } else {
          existsDoc = false;
        }
      })
      .catch(function (error) {});

    return existsDoc;
  }

  addHealth(health: Health) {
    return this.healthCollection.doc(health.data).set(health);
  }

  getHealths() {
    return this.healthCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          // pega o doc e usa o user ID
          const userId = a.payload.doc.id;
          return { userId, ...data };
        });
      })
    );
  }

  getHealth(today: string) {
    return this.healthCollection.doc<Health>(today).valueChanges();
  }

}
