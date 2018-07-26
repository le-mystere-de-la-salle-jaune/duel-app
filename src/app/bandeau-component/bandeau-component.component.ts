import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-bandeau-component',
  templateUrl: './bandeau-component.component.html',
  styleUrls: ['./bandeau-component.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class BandeauComponentComponent implements OnInit {
  titre:string;
  
  constructor() {
    this.titre = 'Duel Application'
   }

  ngOnInit() {
  }

}
