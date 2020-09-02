import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Questions } from "../interface/questions";
import { User } from "src/app/interface/user";
import { map, takeLast } from "rxjs/operators";
import * as firebase from "firebase";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questionsCollection: AngularFirestoreCollection<Questions>;
  constructor(
    private afs: AngularFirestore, 
    private authService: AuthService) {
      this.questionsCollection = this.afs.collection<Questions>(
        "Users/" + this.authService.getAuth().currentUser.uid + "/Questions"
      );
     }

     async checkExists(quest: string) {
      let existsDoc: boolean;
  
      await this.questionsCollection
        .doc(quest)
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
  
    addHealth(questions: Questions, title: string) {
      return this.questionsCollection.doc(title).set(questions);
    }
  
    getHealths() {
      return this.questionsCollection.snapshotChanges().pipe(
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
  
    getHealth(quest: string) {
      return this.questionsCollection.doc<Questions>(quest).valueChanges();
    }  
}
