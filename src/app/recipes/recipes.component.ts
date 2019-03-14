import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe:Recipe;
  constructor(private recipeService:RecipeService) { 
    
  }

  ngOnInit() {
    //not using anymore, we have done this component interaction with route
    /*
    this.recipeService.recipeSelected.subscribe(
        (recipe: Recipe) =>{
          this.recipe=recipe
        } 
      ); //ES6 arrow function
    */
    
  }
  //manual interaction with component
  /*
   rcvRecipe(recivedRecipe:Recipe){
    this.recipe=recivedRecipe;
  }
   */
  
  
}
