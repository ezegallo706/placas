import { Injectable } from '@angular/core';
import { CieloRraso } from './cielorraso/cielorraso';
import { JsonRraso } from './cielorraso/mock-cielorraso';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CieloRrasoService {

  constructor() { }
  getCieloJson(): Observable<CieloRraso[]> {
    return of(JsonRraso);
  }
  getCieloJsonId(id : number){
    return of(JsonRraso.find(cielo => cielo.id === id));
  }
  getID(id : number){
    return of(JsonRraso.find(cielo => cielo.id === id));
  }

}
