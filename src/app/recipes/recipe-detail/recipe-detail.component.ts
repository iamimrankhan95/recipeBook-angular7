import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipeService:RecipeService,private shoppingListService:ShoppingListService) { 
    
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => alert('New Status: ' + recipe)
    // );
  }

  ngOnInit() {
  }

  addToShoppingList(){
    this.recipeService.addIngredientList(this.recipe.ingredients);
  }
}
