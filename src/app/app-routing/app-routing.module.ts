import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RevestimientosComponent } from '../revestimientos/revestimientos.component';
import { CieloRrasoComponent } from '../cielorraso/cielorraso.component';
import { ContactoComponent } from '../contacto/contacto.component';
import {FormularioComponent} from '../formulario/formulario.component';
const routes: Routes = [
  //ruta para redireccionar (a home) cuando se entra a la raíz del proyecto:
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'cielorrasos/:id', component: CieloRrasoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'revestimientos/:id', component: RevestimientosComponent},
  { path: 'cielorraso', component: CieloRrasoComponent},
<<<<<<< HEAD
  { path: 'revestimiento', component:RevestimientosComponent},
  { path: 'contacto', component: ContactoComponent}
=======
  { path: 'formulario', component: FormularioComponent}
>>>>>>> 65a8e9385112f93a652208a07ac70a77acdc5a60
  
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
