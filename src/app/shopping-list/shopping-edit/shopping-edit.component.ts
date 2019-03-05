import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientCreated:Ingredient;
  @Output() ingredientEmitter=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(name:HTMLInputElement,amount:HTMLInputElement){
    this.ingredientCreated=new Ingredient(name.value,parseInt( amount.value));
    this.emitIngredient();
  }
  emitIngredient(){
    this.ingredientEmitter.emit(this.ingredientCreated);
  }
}
