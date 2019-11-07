import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
//https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [// recipeModule is included because for lazy loading
    BrowserModule,
    HttpClientModule,
    ShoppingModule,
    AuthModule,
    CoreModule // the exported elements need not te re import or declaration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
