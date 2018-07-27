import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire, Resultat } from '../domain';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ResultatsService } from '../services/resultats.service';
import { StagiaireService } from '../services/stagiaire.service';


@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {

  @Input() stagiaire: Stagiaire;
  @Input() resultat: Resultat;


  idStagiaire: number;
  listeResultats:Resultat[] = [];

  // Injection du service ActivatedRoute
  constructor(private router:Router, private route: ActivatedRoute, private _resultatsService:ResultatsService, private _stagiaireService:StagiaireService) {
    this._resultatsService.listerResultats().then((resultats: Resultat[]) => {
      resultats.forEach(resultat => {
        this.listeResultats.push(resultat);
      });
    }, (error: any) => {
      console.log("error", error);
    });;
  }


  detailler() {
    this.router.navigate([this.stagiaire.id+'/resultats-duels/'+this.resultat.id])
  }


  ngOnInit() {
    this.idStagiaire = this._stagiaireService.currentStagiaireId;
  }

}
