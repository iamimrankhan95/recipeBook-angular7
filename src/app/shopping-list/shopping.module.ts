import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ShoppingModule { }
