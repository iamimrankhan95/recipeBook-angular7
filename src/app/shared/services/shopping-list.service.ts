import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  //ingredientToAdd=new EventEmitter<Ingredient>();
  ingredientChanged=new EventEmitter<Ingredient[]>(); // will work like push notification. whenever list is updated it will emit the list, and the concerned components will listen for it.
  constructor() { 
  }
  getRecipes(){
    return this.ingredients.slice(); 
  }

  addToIngredientList(ingredient:Ingredient){
    //this.ingredients.slice().push(ingredient);
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addListToIngredientList(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
  //   var unique = this.ingredients.filter(function(elem, index, self) {
  //     return index === self.indexOf(elem);
  // })
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
