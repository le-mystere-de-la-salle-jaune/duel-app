import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Duel } from '../domain';
import { DuelService } from '../services/duel.service';
import { StagiaireService } from '../services/stagiaire.service';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-duels',
  templateUrl: './duels.component.html',
  styleUrls: ['./duels.component.scss']
  
})
export class DuelsComponent implements OnInit {

  idStagiaire: number;
  listeDuels:Duel[] = [];

  // Injection du service ActivatedRoute
  constructor(private router:Router, private route: ActivatedRoute, private _duelService:DuelService, private _stagiaireService:StagiaireService) {
    
  }

  participer() {
    //TO DO
  }

  ngOnInit() {
    this.idStagiaire = this._stagiaireService.currentStagiaireId;
    this. listeDuels =  this._duelService.getDuelsByStagiaireId(this.idStagiaire);
  }

}
