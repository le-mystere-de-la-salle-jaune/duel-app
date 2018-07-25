import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Duel } from '../domain';
import { DuelService } from '../services/duel.service';


@Component({
  selector: 'app-duels',
  templateUrl: './duels.component.html',
  styleUrls: ['./duels.component.scss']
})
export class DuelsComponent implements OnInit {

  idStagiaire: number;
  listeDuels:Duel[] = [];

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute, private _duelService:DuelService) {
    // récupération du paramètre id
    this.idStagiaire = Number.parseInt(route.snapshot.paramMap.get("id_stagiaire"));
    _duelService.listerDuels().then((duels: Duel[]) => {
      duels.forEach(duel => {
        if (duel.stagiaireA.id == this.idStagiaire || duel.stagiaireB.id == this.idStagiaire) {
          this.listeDuels.push(duel);
        }
      });
    });

  }

  
  participer() {
    //TO DO
  }

  ngOnInit() {
  }

}
