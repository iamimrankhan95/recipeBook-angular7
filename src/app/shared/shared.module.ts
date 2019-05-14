import { NgModule } from '@angular/core';
import { DropdownDirective } from './directives/dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[DropdownDirective],
  exports:[CommonModule,DropdownDirective] // module er kono feature use krte hole sheta export korte hoy... just declaration is not enough
}) //module edit na korte hole direct export kora jay.. modify korar jonno age import krte hoy (CommonModule)
export class SharedModule{

}