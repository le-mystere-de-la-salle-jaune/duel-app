import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Duel } from '../domain';
import { environment } from '../../environments/environment';

// en développement, URL_BACKEND = 'http://localhost:8080/api/duels'
// en mode production, URL_BACKEND = 'https://evalme-app.herokuapp.com/api/duels/'
const URL_BACKEND = environment.backendUrl + environment.duelsApi;

@Injectable()
export class DuelService {

  constructor(private _http: HttpClient) { }

  listerDuels(): Promise<Duel[]> {
    return this._http.get(URL_BACKEND)
      .toPromise()
      .then((duelsServeur: any[]) => duelsServeur.map( el => new Duel(el.id, el.stagiaireA, el.stagiaireB, el.quizz)));
  }
}
