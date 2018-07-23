import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { StagiaireComponentComponent } from './stagiaire-component/stagiaire-component.component';
import { ListeStagiairesComponentComponent } from './liste-stagiaires-component/liste-stagiaires-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponentComponent,
    StagiaireComponentComponent,
    ListeStagiairesComponentComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
