import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from './domain';

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
  
  ngOnInit() {
  }
}


