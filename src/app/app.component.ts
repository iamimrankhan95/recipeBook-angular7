import { Component, Output, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Book';
  // showRecipe:boolean=true;
  constructor() {

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBPX0v9uuqCVSMZxvf0bQHeBev28c2MoW8",
      authDomain: "ng-recipe-book-a48f4.firebaseapp.com",
    })
  }
  // navicate(serverData: {showRecipe:boolean}){
  //   this.showRecipe=serverData.showRecipe;
  // }

}
