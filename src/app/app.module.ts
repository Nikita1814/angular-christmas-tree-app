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
import { DecorationsComponent } from './tree-page/decorations/decorations.component';
import { ToyBoxComponent } from './tree-page/toy-box/toy-box.component';
import  {DragDropModule} from '@angular/cdk/drag-drop'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToysPageComponent,
    TreePageComponent,
    HeaderComponent,
    ToyGridComponent,
    ToyFiltersComponent,
    DecorationsComponent,
    ToyBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
