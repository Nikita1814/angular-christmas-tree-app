import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { TreePageComponent } from './tree-page/tree-page.component';

const routes: Routes = [
  {path:'home-page', component: HomePageComponent},
  {path:'toys-page', component: ToysPageComponent },
  {path:'tree-page', component: TreePageComponent},
  {path:'**', component: HomePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
