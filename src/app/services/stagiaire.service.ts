import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stagiaire } from '../domain';
import {environment} from '../../environments/environment';
import { Observable, Subject, BehaviorSubject } from '../../../node_modules/rxjs';
import { map, tap } from '../../../node_modules/rxjs/operators';
// en développement, URL_BACKEND = 'http://localhost:8080/api/stagiaires/'
// en mode production, URL_BACKEND = 'https://evalme-app.herokuapp.com/api/stagiaires/'
const URL_BACKEND = environment.backendUrl + environment.stagiairesApi;

@Injectable()
export class StagiaireService {

  //Valorisé dans "navigation.component.ts"
  currentStagiaireId:number;

  private _modifStagiaire:Subject<Stagiaire> = new BehaviorSubject(new Stagiaire(undefined, undefined, undefined, undefined, undefined));

  // créer un magazine de notification de changement d'email

  // injection du service HTTP
  constructor(private _http: HttpClient) { }

  get modifStagiaire$(): Observable<Stagiaire> {
    return this._modifStagiaire.asObservable();
  }

  listerStagiaires():Observable<Stagiaire[]> {
    return this._http.get(URL_BACKEND)
      .pipe(
        map((httpResult: any[]) => httpResult.map(element => new Stagiaire(element.id, element.nom, element.prenom, element.email, element.photo_url)))
      );
    /*return this._http.get(URL_BACKEND)
      .toPromise()
      .then((stagiairesServeur: any[]) => stagiairesServeur.map( el => new Stagiaire(el.id, el.nom, el.prenom, el.email, el.photo_url)))*/
  }

  findStagiaireFromServeur(idStagiare:number):Observable<Stagiaire> {
    return this._http.get(URL_BACKEND+idStagiare)
    .pipe(
      map((stagiaireServeur: any) => new Stagiaire(stagiaireServeur.id, stagiaireServeur.nom, stagiaireServeur.prenom, stagiaireServeur.email, stagiaireServeur.photo_url)),
      tap( modifiedStagiaire => this._modifStagiaire.next(modifiedStagiaire))
    );
  }

  modifierStagiaire(stagiaire:Stagiaire):Observable<Stagiaire> {
    return this._http.put(URL_BACKEND+stagiaire.id, stagiaire.toStagiaireServeur())
    .pipe(
        map((object: any) => new Stagiaire(object.id, object.nom, object.prenom, object.email, object.photo_url))
        , tap(modifiedStagiaire => this._modifStagiaire.next(modifiedStagiaire))
      );
    /*
    .toPromise()
    .then((el: any) => new Stagiaire(el.id,el.nom, el.prenom,el.email, el.photo_url))
    .catch(function(error) {
      console.log(error);
      return null;
    });*/
  }

}