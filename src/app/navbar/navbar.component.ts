import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CieloRraso } from '../cielorraso/cielorraso';
import { CieloRrasoService } from '../cielorraso.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  JsonProductos : CieloRraso[];

  constructor(private cieloService: CieloRrasoService) { 
  }

  ngOnInit() {
    this.getCieloJson();
  }

  getCieloJson(): void {
    this.cieloService.getCieloJson()
    .subscribe(cielo => this.JsonProductos = cielo);
    console.log(this.JsonProductos);
  }

}
