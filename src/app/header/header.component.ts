import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
  }
  saveRecipes(){
    this.dataStorageService.storeRecipe().subscribe(
      (response:Response)=>{
        console.log(response)
      }
    )
  }
  retriveRecipes(){
    this.dataStorageService.retriveRecipe();
  }
}
