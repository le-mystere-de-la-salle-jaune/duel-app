import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './../domain';

@Component({
  selector: 'app-form-stagiaire',
  templateUrl: './form-stagiaire.component.html',
  styleUrls: ['./form-stagiaire.component.scss']
})
export class FormStagiaireComponent implements OnInit {


 
  constructor() { }
stagiaire:Stagiaire = new Stagiaire(1, 'clopin', 'brigitte',  'test@test.fr', 'photo');
  ngOnInit() {
  }

  submit() {
    console.log(this.stagiaire);
  }

}
