import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from './services/stagiaire.service';
import { Stagiaire } from './domain';
import { Location } from '../../node_modules/@angular/common';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title:string = 'app';
  currentStagiaire:Stagiaire;
  // Injection du service ActivatedRoute
  constructor(private _route:ActivatedRoute, private _router:Router) {
  }

  redirectToHome() {
    this._router.navigate(['']);
  }

  /*getCurrentStagiaire():void{ 
    /*if (location.pathname != '') {
      // récupération du paramètre id
      let idStagiaire = Number.parseInt(location.pathname.split("/")[1]);
      console.log(idStagiaire);      
      this.stagiaireService.findStagiaireById(idStagiaire)
        .then((stagiaire: Stagiaire) => this.currentStagiaire = stagiaire, (error: any) => console.log('error', error));
    }
}*/

  ngOnInit() {
    //this.getCurrentStagiaire();
  }
}


