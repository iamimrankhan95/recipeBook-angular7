import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  subcription: Subscription
  // ingredients:Ingredient[]=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];
  constructor(private shoppingListService: ShoppingListService) {
    //console.log('this is constructor')
  }

  ngOnInit() {
    //console.log('this is ngOninit')
    this.ingredients = this.shoppingListService.getIngredients();
    this.subcription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

  }
  addIngredientToArr(ingredient: Ingredient) {

  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  selectIndexForEdit(indexForEdit: number) {
    this.shoppingListService.emitIndexForEditIngredient.next(indexForEdit);
  }
}
