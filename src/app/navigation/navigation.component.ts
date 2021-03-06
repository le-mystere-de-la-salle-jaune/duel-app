import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { StagiaireService } from '../services/stagiaire.service';
import { Stagiaire } from '../domain';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  currentStagiaire?:Stagiaire;
  currentStagiaireId:number;

  constructor(private route: ActivatedRoute, private _stagiaireService: StagiaireService) { }

  ngOnInit() {
    let stagiaire:Stagiaire;
    const idStagiaire = Number.parseInt(this.route.snapshot.paramMap.get("id_stagiaire")/*location.pathname.split('/')[1]*/);
    this._stagiaireService.currentStagiaireId = idStagiaire;
    this.currentStagiaireId = idStagiaire;
    console.log(idStagiaire);
    this._stagiaireService.findStagiaireFromServeur(idStagiaire).subscribe();
    this._stagiaireService.modifStagiaire$
      .subscribe((stagiaireFound:Stagiaire) => this.currentStagiaire = new Stagiaire(idStagiaire, stagiaireFound.nom, stagiaireFound.prenom, stagiaireFound.email, stagiaireFound.photoUrl));
  }

}
