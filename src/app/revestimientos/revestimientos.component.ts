import { Component, OnInit, Input } from '@angular/core';
import {Revestimiento} from './revestimiento';
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

  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private revestimientoService:RevestimientoService
  ) { }

  onClick(ide : number){
    console.log(ide);
    RevestimientoService.prototype.getID(ide).subscribe(primero => this.segundo = primero);
    console.log(this.segundo);
    if(this.segundo!=undefined){
      this.boleano=false;
      this.primero=undefined;
        console.log(this.primero);
    }
  }

  ngOnInit() {
    console.log(this.boleano);
    this.getRevestimientoJsonID();
  }

  getRevestimientoJsonID():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.revestimientoService.getRevestimientoJsonID(id)
    .subscribe(primero => this.primero = primero);
  }
}
