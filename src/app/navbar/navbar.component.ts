import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
  ides : number;
  // public CieloRa: CieloRrasoComponent;
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private cieloService:CieloRrasoService
    ) {}
  
 
  toto(xe : number){
    CieloRrasoComponent.prototype.onClick(xe);
  }
  
  ngOnInit() {
    this.getCieloJson();
  }
  
  getCieloJson(): void {
    this.cieloService.getCieloJson()
    .subscribe(cielo => this.JsonProductos = cielo);
  }

}
