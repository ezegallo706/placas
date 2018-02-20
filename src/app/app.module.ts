import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CielorrasoComponent } from './cielorraso/cielorraso.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CielorrasoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot ()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
