import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:Recipe; no more manual interaction
  recipe:Recipe;
  recipeIndex:number;
  constructor(private recipeService:RecipeService,
    private shoppingListService:ShoppingListService,
    private route:ActivatedRoute,
    private router:Router
    ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeIndex=+params['id'];
          this.recipe = this.recipeService.getRecipeByIndex(this.recipeIndex);                 
        }
      );
    
  }

  addToShoppingList(){
    this.recipeService.addIngredientList(this.recipe.ingredients);
  }
  //not need
  goto(){
    //alert(this.route);
    this.router.navigate(['../../act'],{relativeTo:this.route});
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['/recipes']);
  }
}
