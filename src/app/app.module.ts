import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RevestimientosComponent } from './revestimientos/revestimientos.component';
import { CieloRrasoComponent } from './cielorraso/cielorraso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CielorrasoDetalleComponent } from './cielo-rraso-detalle/cielo-rraso-detalle.component';
import { FormsModule }    from '@angular/forms';
import { CieloRrasoService} from './cielorraso.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CieloRrasoComponent,
    ContactoComponent,
    RevestimientosComponent,
    FooterComponent,
    CielorrasoDetalleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot (),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CieloRrasoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
