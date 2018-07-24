import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domain';


@Component({
  selector: 'app-liste-stagiaires-component',
  templateUrl: './liste-stagiaires-component.component.html',
  styleUrls: ['./liste-stagiaires-component.component.scss']
})
export class ListeStagiairesComponentComponent implements OnInit {

  private _listeStagiaire:Stagiaire[] = [];

  constructor() {
    this._listeStagiaire.push(new Stagiaire(1, 'Lupin', 'Paul', 'test@hotmail.fr', 'testPhoto'));
    this._listeStagiaire.push(new Stagiaire(2, 'Rent', 'Jacques', 'test@hotmail.fr', 'testPhoto'));
    this._listeStagiaire.push(new Stagiaire(3, 'Pluton', 'Camille', 'test@hotmail.fr', 'testPhoto'));
    this._listeStagiaire.push(new Stagiaire(4, 'Mars', 'Bruno', 'test@hotmail.fr', 'testPhoto'));
  }

  get listeStagiaire() {
    return this._listeStagiaire;
  }

  ngOnInit() {
  }

}
