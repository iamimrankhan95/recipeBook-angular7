import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[];
  //@Output() rcvdPassRecipe=new EventEmitter<Recipe>();
  
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  // passRecipe(recivedRecipe:Recipe){
  //   this.rcvdPassRecipe.emit(recivedRecipe);
  // }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
