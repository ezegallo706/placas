import { Component, OnInit } from '@angular/core';
import { CieloRraso } from './cielorraso';
import { CieloRrasoService } from '../cielorraso.service';

@Component({
  selector: 'app-cielorraso',
  templateUrl: './cielorraso.component.html',
  styleUrls: ['./cielorraso.component.css']
})


export class CieloRrasoComponent implements OnInit {
  
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




