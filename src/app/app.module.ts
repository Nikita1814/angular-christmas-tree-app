import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { TreePageComponent } from './tree-page/tree-page.component';
import { HeaderComponent } from './header/header.component';
import { ToyGridComponent } from './toys-page/toy-grid/toy-grid.component';
import { ToyFiltersComponent } from './toys-page/toy-filters/toy-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToysPageComponent,
    TreePageComponent,
    HeaderComponent,
    ToyGridComponent,
    ToyFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
