import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CieloRraso } from '../cielorraso/cielorraso';
import { CieloRrasoService } from '../cielorraso.service';

@Component({
  selector: 'app-cielo-rraso-detalle',
  templateUrl: './cielo-rraso-detalle.component.html',
  styleUrls: ['./cielo-rraso-detalle.component.css']
})
export class CielorrasoDetalleComponent implements OnInit {

  @Input() cielo: CieloRraso;
  
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private cieloService:CieloRrasoService
  ) { }

  ngOnInit() {
    this.getCieloJsonId();
  }
  getCieloJsonId(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.cieloService.getCieloJsonId(id)
      .subscribe(cielo => this.cielo = cielo);
  }
}
