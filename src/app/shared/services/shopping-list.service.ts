import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  ingredientChanged=new Subject<Ingredient[]>(); // will work like push notification. whenever list is updated it will emit the list, and the concerned components will listen for it.
  emitIndexForEditIngredient=new Subject<number>();
  constructor() { 
  }
  getIngredients(){
    return this.ingredients.slice(); 
  }

  addToIngredientList(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredientList(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    //for unique item in list
    /*
    var unique = this.ingredients.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })*/
    this.ingredientChanged.next(this.ingredients.slice());
  }
  getIngredient(index:number){
    return this.ingredients[index];
  }
  editIngredient(index:number ,ingredient:Ingredient){
    this.ingredients[index]=ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
