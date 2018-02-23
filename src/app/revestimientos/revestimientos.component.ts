import { Component, OnInit, Input } from '@angular/core';
import { Revestimiento } from './revestimiento';
import { RevestimientoService } from '../revestimiento.service';
//preguntar si estos hay que hacer algo mas
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-revestimientos',
  templateUrl: './revestimientos.component.html',
  styleUrls: ['./revestimientos.component.css']
})
export class RevestimientosComponent implements OnInit {

  @Input() primero: Revestimiento;
  @Input() segundo: Revestimiento;
  boleano: boolean;
  mati = "hola";
   constructor(
    private routex: ActivatedRoute,
    private locationx: Location
  ) { }

  onMati(ide : number){
    this.boleano = true;
    RevestimientoService.prototype.getID(ide).subscribe(cielo => this.segundo = cielo);
  }  
  

  ngOnInit() {
    console.log(this.boleano);
    this.getRevestimientoJsonID();
  }

  getRevestimientoJsonID():void{
    const id = +this.routex.snapshot.paramMap.get('id');
    RevestimientoService.prototype.getRevestimientoJsonID(id)
    .subscribe(primero => this.primero = primero);
    console.log(id);
  }
}
