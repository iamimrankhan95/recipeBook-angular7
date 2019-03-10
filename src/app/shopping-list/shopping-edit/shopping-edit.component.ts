import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientCreated:Ingredient;
  @Output() ingredientEmitter=new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient(name:HTMLInputElement,amount:HTMLInputElement){
    // this.ingredientCreated=new Ingredient(name.value,parseInt( amount.value));
    // this.emitIngredient();
    this.shoppingListService.addToIngredientList(new Ingredient(name.value,parseInt( amount.value)));
  }
  // emitIngredient(){
  //   this.ingredientEmitter.emit(this.ingredientCreated);
  // }
}
