import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class DataStorageService{ 
    constructor(private http:HttpClient,private recipeService:RecipeService){}
    storeRecipe(){
        return this.http.put('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json',this.recipeService.getRecipes())
    }
    retriveRecipe(){
        return this.http.get<Recipe[]>('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json')
        .pipe(
            map(
                (recipes:Recipe[])=>{
                    for(let recipe of recipes){
                        if(!recipe.ingredients){
                            console.log(recipe)
                            recipe.ingredients=[];
                        }
                    }
                    return recipes;
                }
            ),
            tap()
        )
        
        .subscribe(
            (recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        )
    }
}