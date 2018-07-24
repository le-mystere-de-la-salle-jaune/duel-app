import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stagiaire } from '../domain';
import {environment} from '../../environments/environment';

// en développement, URL_BACKEND = 'http://localhost:8080/api/stagiaires'
// en mode production, URL_BACKEND = 'https://evalme-app.herokuapp.com/api/stagiaires/'
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class StagiaireService {

  //private _listeStagiaire: Stagiaire[] = [];

  // injection du service HTTP
  constructor(private _http: HttpClient) { }

  listerStagiaires(): Promise<Stagiaire[]> {
    return this._http.get(URL_BACKEND)
      .toPromise()
      .then((stagiairesServeur: any[]) => stagiairesServeur.map( el => new Stagiaire(el.id, el.nom, el.prenom, el.email, el.photoUrl)))
  }

}