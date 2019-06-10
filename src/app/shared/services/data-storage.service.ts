import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {

  }
  storeRecipe() {
    const token = this.authService.getUserToken();
    // const header= new HttpHeaders().set('Authorization','Bearer alsdkjfoaisjd;lkafjsoid')
    return this.httpClient.put('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: new HttpParams().set('auth', token)// for query params
      // headers:header
    })
  }
  retriveRecipe() {
    const token = this.authService.getUserToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json?', {
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
    }).pipe(
      map( // is for formatting the data
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe.ingredients) {// this is for handling the data presentation, because there is property inconsistency in database
              console.log(recipe);
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      ),
      tap()
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    )
  }
}