import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  // ingredients:Ingredient[]=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];
  constructor(private shoppingListService:ShoppingListService) { 
    //console.log('this is constructor')
  }

  ngOnInit() {
    //console.log('this is ngOninit')
    this.ingredients=this.shoppingListService.getRecipes();
    this.shoppingListService.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    })
    
  }
  addIngredientToArr(ingredient:Ingredient){
    
  }
}
