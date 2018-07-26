import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './../domain';
import { Router } from '@angular/router';
import { StagiaireService } from './../services/stagiaire.service';

@Component({
  selector: 'app-form-stagiaire',
  templateUrl: './form-stagiaire.component.html',
  styleUrls: ['./form-stagiaire.component.scss']
})
export class FormStagiaireComponent implements OnInit {

  stagiaire:Stagiaire;

  constructor(private _router:Router, private _stagiaireService:StagiaireService) {
  }
  
  ngOnInit() {
    this._stagiaireService.findStagiaireById(this._stagiaireService.currentStagiaireId).then((stagiaireFound:Stagiaire) => this.stagiaire = stagiaireFound);
  }

  submit() {
    this._stagiaireService.modifierStagiaire(this.stagiaire);
    console.log(this.stagiaire);
    this._router.navigate([this._stagiaireService.currentStagiaireId+'/duels'])
  }

}
