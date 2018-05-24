import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Header } from './header/header.component';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeList } from './recipes/recipe-list/recipe-list.component';
import { Recipes } from './recipes/recipes.component';

@NgModule({
  declarations: [
    Header,
    AppComponent,
    Footer,
    ShoppingList,
    ShoppingListEdit,
    Recipes,
    RecipeList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
