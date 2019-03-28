import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

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
      let recipe=this.recipeService.getRecipeByIndex(this.id);
      recipeName=recipe.name;
      recipeImageUrl=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9][0-9]*$/)])
          }))
        }
      }
    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(recipeImageUrl,Validators.required),
      'description' : new FormControl(recipeDescription,Validators.required),
      'ingredients' : recipeIngredients
    });
  }
  addIngredientInputRow(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9][0-9]*$/)])
    }))
  }
  onSubmit(){
    if(this.isEditMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route}); 
    //this.router.navigate(['/recipes',this.id]);
  }
  deleteIngredientRowFromForm(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
