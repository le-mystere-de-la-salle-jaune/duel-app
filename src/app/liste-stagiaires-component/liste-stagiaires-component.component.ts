import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domain';


@Component({
  selector: 'app-liste-stagiaires-component',
  templateUrl: './liste-stagiaires-component.component.html',
  styleUrls: ['./liste-stagiaires-component.component.scss']
})
export class ListeStagiairesComponentComponent implements OnInit {

  private listeStagiaire:Stagiaire[] = [];

  constructor() {
    this.listeStagiaire.push(new Stagiaire(1, 'Lupin', 'Paul', 'test@hotmail.fr', 'testPhoto'));
    this.listeStagiaire.push(new Stagiaire(2, 'Rent', 'Jacques', 'test@hotmail.fr', 'testPhoto'));
  }

  ngOnInit() {
  }

}
