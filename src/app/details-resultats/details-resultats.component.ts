import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-resultats',
  templateUrl: './details-resultats.component.html',
  styleUrls: ['./details-resultats.component.scss']
})
export class DetailsResultatsComponent implements OnInit {

  idStagiaire: number;

  constructor(private route: ActivatedRoute) { 

    this.idStagiaire = Number.parseInt(route.snapshot.paramMap.get("id_stagiaire"));
  }


  ngOnInit() {
  }

}
