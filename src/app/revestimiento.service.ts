import { Injectable } from '@angular/core';
import {Revestimiento} from './revestimientos/revestimiento';
import {JsonRevestimiento} from './revestimientos/mock-revestimiento';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RevestimientoService {

  constructor() { }
  getRevestimientoJson(): Observable<Revestimiento[]>{
    return of(JsonRevestimiento);
  }
  getRevestimientoJsonID(id : number){
    return of(JsonRevestimiento.find(primero => primero.id === id));
  }
  getID(id : number){
    return of(JsonRevestimiento.find(primero=> primero.id === id));
  }
}
