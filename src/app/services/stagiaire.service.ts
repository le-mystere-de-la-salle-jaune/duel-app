import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stagiaire } from '../domain';
import {environment} from '../../environments/environment';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

// en développement, URL_BACKEND = 'http://localhost:8080/api/stagiaires/'
// en mode production, URL_BACKEND = 'https://evalme-app.herokuapp.com/api/stagiaires/'
const URL_BACKEND = environment.backendUrl + environment.stagiairesApi;

@Injectable()
export class StagiaireService {

  currentStagiaireId:number;
  //private _listeStagiaire: Stagiaire[] = [];

  // injection du service HTTP
  constructor(private _http: HttpClient) { }

  listerStagiaires():Promise<Stagiaire[]> {
    return this._http.get(URL_BACKEND)
      .toPromise()
      .then((stagiairesServeur: any[]) => stagiairesServeur.map( el => new Stagiaire(el.id, el.nom, el.prenom, el.email, el.photo_url)))
  }

  findStagiaireById(id:number):Promise<Stagiaire> {
    return this._http.get(URL_BACKEND+id)
      .toPromise()
      .then((stagiaireServeur: any) => new Stagiaire(stagiaireServeur.id, stagiaireServeur.nom, stagiaireServeur.prenom, stagiaireServeur.email, stagiaireServeur.photo_url));
  }

}