import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Resultat } from './../domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// en développement, URL_BACKEND = 'http://localhost:8080/api/resultats-duels'
// en mode production, URL_BACKEND = 'https://evalme-app.herokuapp.com/api/resultats-duels/'
const URL_BACKEND = environment.backendUrl + environment.resultatsApi;

@Injectable()
export class ResultatsService {

  constructor(private _http: HttpClient) { }

  listerResultats(): Observable<Resultat[]> {
    const resultats$ = this._http.get(URL_BACKEND)
      .pipe(
        map((resultatsServeur: any[]) => resultatsServeur.map( el => new Resultat(el.id, el.titre_quizz, el.adversaire, el.score)))
      );
      return resultats$;
      
  }

}
