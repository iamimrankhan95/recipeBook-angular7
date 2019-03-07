import { Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  constructor() { 

  }
  getRecipes(){
    return this.ingredients.slice();
  }
}
