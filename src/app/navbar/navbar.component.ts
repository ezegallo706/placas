import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Revestimiento } from '../revestimientos/revestimiento';
import { RevestimientosComponent } from '../revestimientos/revestimientos.component';
import { RevestimientoService } from '../revestimiento.service';
import { CieloRraso } from '../cielorraso/cielorraso';
import { CieloRrasoService } from '../cielorraso.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CieloRrasoComponent } from '../cielorraso/cielorraso.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  JsonProductos : CieloRraso[];
  JsonReves: Revestimiento[];

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private cieloService:CieloRrasoService
    ) {}
  
 
  toto(xe : number){
    CieloRrasoComponent.prototype.onClick(xe);
  }
  mati( idex : number ){
    RevestimientosComponent.prototype.onMati(idex);
  }
  
  ngOnInit() {
    this.getCieloJson();
    this.getRevestimientoJson();
  }
  getRevestimientoJson(): void {
    RevestimientoService.prototype.getRevestimientoJson()
    .subscribe(cielo => this.JsonReves = cielo);
    console.log(this.JsonReves);
  }
  getCieloJson(): void {
    this.cieloService.getCieloJson()
    .subscribe(toto => this.JsonProductos = toto);
  }

}
