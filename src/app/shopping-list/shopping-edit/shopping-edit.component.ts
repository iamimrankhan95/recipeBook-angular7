import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEditForm') form:NgForm;
  @ViewChild('addUpdateBtn') addUpdateBtn:ElementRef;
  ingredientIndexForEditing: Subscription;
  editMode = false;
  index: number;
  ingredientForEditing:Ingredient

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.ingredientIndexForEditing = this.shoppingListService.emitIndexForEditIngredient.subscribe((index: number) => {
      this.editMode = true;
      this.index = index;
      this.ingredientForEditing=this.shoppingListService.getIngredient(this.index);
      this.form.setValue({
        name:this.ingredientForEditing.name,
        amount:this.ingredientForEditing.amount
      })
    })
  }
  addIngredient(form: NgForm) {
    if(this.editMode){
      this.editIngredients();
    }else{
      this.shoppingListService.addToIngredientList(new Ingredient(form.value.name, parseInt(form.value.amount)));
    }
    form.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.ingredientIndexForEditing.unsubscribe();
  }
  editIngredients(){
    this.shoppingListService.editIngredient(this.index,new Ingredient(this.form.value.name, parseInt(this.form.value.amount)));
  }
}
