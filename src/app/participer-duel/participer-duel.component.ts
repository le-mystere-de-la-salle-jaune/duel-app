import { Component, OnInit } from '@angular/core';
import { Duel } from '../domain';
import { DuelService } from '../services/duel.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-participer-duel',
  templateUrl: './participer-duel.component.html',
  styleUrls: ['./participer-duel.component.scss']
})
export class ParticiperDuelComponent implements OnInit {

  duel:Duel;

  constructor(private _router:Router, private _duelService:DuelService) { }

  ngOnInit() {
    this._duelService.getDuelById(this._duelService.currentDuelId).then(duelFound => this.duel = duelFound);
  }

}
