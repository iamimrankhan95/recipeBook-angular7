import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private token: string;
    constructor(private router: Router) {

    }
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then()
            .catch((error) => {
                console.log(error);
            })
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then((token) => {
                        this.token = token;
                    });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getUserToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token) => {
                this.token = token;
            });
        return this.token;
    }
    isUserAuthentic(): boolean {
        return this.token != null;
    }
    logout() {
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
        this.token = null;
    }
}