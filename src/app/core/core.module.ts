import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../shared/services/recipe.service';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[AppRoutingModule,HeaderComponent],
  providers: [RecipeService, ShoppingListService, DataStorageService, AuthService], // these services should be provided in appModule but its is good practise to keep appModule leaner , coreModule provided service will be merged with the root so it is placed coreModule
})
export class CoreModule { }
