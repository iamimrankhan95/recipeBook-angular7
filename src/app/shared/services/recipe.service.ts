import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[
    new Recipe('A test recipe1','this is simply a test1','https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('A test recipe2','this is simply a test2','https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('A test recipe3','this is simply a test3','https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('A test recipe4','this is simply a test4','https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('A test recipe5','this is simply a test5','https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
  ];
  recipeSelected=new EventEmitter<Recipe>();
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
