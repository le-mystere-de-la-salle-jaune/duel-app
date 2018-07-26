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


 
  constructor(private router:Router, private stagiaireService:StagiaireService) { }
stagiaire:Stagiaire = new Stagiaire(1, 'clopin', 'brigitte',  'test@test.fr', 'photo');
  ngOnInit() {
  }

  submit() {
    console.log(this.stagiaire);
    this.router.navigate([this.stagiaireService.currentStagiaireId+'/duels'])
  }

}
