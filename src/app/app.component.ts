import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  showRecipe:boolean=true;
  constructor(){

  }

  navicate(serverData: {showRecipe:boolean}){
    this.showRecipe=serverData.showRecipe;
  }
  
}
