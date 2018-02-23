import { Component, OnInit, Input } from '@angular/core';
import { CieloRraso } from './cielorraso';
import { CieloRrasoService } from '../cielorraso.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cielorraso',
  templateUrl: './cielorraso.component.html',
  styleUrls: ['./cielorraso.component.css']
})


export class CieloRrasoComponent implements OnInit {


  @Input() cielo: CieloRraso;
  @Input() toto: CieloRraso;
  variable: boolean;
  // JsonProductos : CieloRraso[];
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private cieloService:CieloRrasoService,
  ) { 
    this.variable; 
  }

  
  
  onClick(ide : number){
    this.variable = true;
    CieloRrasoService.prototype.getID(ide).subscribe(cielo => this.toto = cielo);
  }



  ngOnInit() {
    this.getCieloJsonId();
  }
   
   getCieloJsonId(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.cieloService.getCieloJsonId(id)
      .subscribe(cielo => this.cielo = cielo);
  }
  


}




