import * as firebase from 'firebase'

export class AuthService {
    private token: string;
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
    logout(){
        firebase.auth().signOut();
        this.token=null;
    }
}