import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domain';
import { StagiaireService } from '../services/stagiaire.service';



@Component({
  selector: 'app-liste-stagiaires-component',
  templateUrl: './liste-stagiaires-component.component.html',
  styleUrls: ['./liste-stagiaires-component.component.scss']
})
export class ListeStagiairesComponentComponent implements OnInit {

  listeStagiaire: Stagiaire[] = [];
  
  constructor(private _stagiaireService: StagiaireService) {
    this._stagiaireService.listerStagiaires().subscribe((stagiaires: Stagiaire[]) => {
      stagiaires.forEach(stagiaire => {
        this.listeStagiaire.push(stagiaire);
      });
    }, (error: any) => {
      console.log("error", error);
    });
  }

  ngOnInit() {
  }

}
