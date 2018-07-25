import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  idStagiaire: number;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute) {

    // récupération du paramètre id
    this.idStagiaire = Number.parseInt(route.snapshot.paramMap.get("id_stagiaire"));


  }
}


