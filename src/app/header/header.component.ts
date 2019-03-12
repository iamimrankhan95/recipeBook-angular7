import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() showRecipe = new EventEmitter<{showRecipe: boolean}>();
  constructor() { }

  ngOnInit() {
  }

  // navicate(flag:boolean){
  //   this.showRecipe.emit({showRecipe:flag});
  // }
}
