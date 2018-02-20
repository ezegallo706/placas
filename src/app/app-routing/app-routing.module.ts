import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CielorrasoComponent } from '../cielorraso/cielorraso.component';
import { NavbarComponent } from '../navbar/navbar.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'cielorraso', component: CielorrasoComponent}
  
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
