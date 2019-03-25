import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  isEditMode:boolean=false;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.isEditMode= params['id']!=null;
        this.initForm();
      }
    )
  }
  initForm(): any {
    let recipeName="";
    let recipeImageUrl="";
    let recipeDescription=""
    let recipeIngredients= new FormArray([]);
    if(this.isEditMode){
      let recipe=this.recipeService.getRecipeById(this.id);
      recipeName=recipe.name;
      recipeImageUrl=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }))
        }
      }
    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImageUrl),
      'description' : new FormControl(recipeDescription),
      'ingredients' : recipeIngredients
    });
  }
  addIngredientInputRow(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(),
      'amount':new FormControl()
    }))
  }
}
