import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RevestimientosComponent } from '../revestimientos/revestimientos.component';
import { CieloRrasoComponent } from '../cielorraso/cielorraso.component';
import { ContactoComponent } from '../contacto/contacto.component';

const routes: Routes = [
  //ruta para redireccionar (a home) cuando se entra a la raíz del proyecto:
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'revestimientos', component: RevestimientosComponent},
  { path: 'cielorraso', component: CieloRrasoComponent},
  { path: 'contacto', component: ContactoComponent}
  
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
