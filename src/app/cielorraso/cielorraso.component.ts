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
  caca: boolean;
  // JsonProductos : CieloRraso[];
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private cieloService:CieloRrasoService,
  ) { }

  
  
  onClick(ide : number){
   console.log(ide);
   CieloRrasoService.prototype.getID(ide).subscribe(cielo => this.toto = cielo);
    console.log(this.toto);
    if(this.toto!=undefined){
    this.caca = false;
    this.cielo=undefined;
      console.log(this.cielo);
    }
  }



  ngOnInit() {
    console.log(this.caca);
    this.getCieloJsonId();
    
  }
   
   getCieloJsonId(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.cieloService.getCieloJsonId(id)
      .subscribe(cielo => this.cielo = cielo);
  }
  


}




