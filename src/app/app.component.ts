import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';
  // showRecipe:boolean=true;
  constructor(){

  }

  // navicate(serverData: {showRecipe:boolean}){
  //   this.showRecipe=serverData.showRecipe;
  // }
  
}
