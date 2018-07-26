import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { StagiaireComponentComponent } from './stagiaire-component/stagiaire-component.component';
import { ListeStagiairesComponentComponent } from './liste-stagiaires-component/liste-stagiaires-component.component';
import { HttpClientModule } from '@angular/common/http';
import { StagiaireService } from './services/stagiaire.service';
import { DuelService } from './services/duel.service';  

import { RouterModule, Routes } from '@angular/router';
import { DuelsComponent } from './duels/duels.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsResultatsComponent } from './details-resultats/details-resultats.component';
import { FormsModule } from '@angular/forms';
import { FormStagiaireComponent } from './form-stagiaire/form-stagiaire.component'

const appRoutes: Routes = [

  { path: 'choix-stagiaires', component: ChoixStagiaireComponent }, // /page1 affiche le composant A

  { path: ':id_stagiaire/duels', component: DuelsComponent }, // /page2 affiche le composant B

  { path: ':id_stagiaire/resultats', component: ResultatsComponent },
  
  { path: ':id_stagiaire/resultats/:id', component: DetailsResultatsComponent },

  { path: ':id_stagiaire/profil', component: FormStagiaireComponent },

  { path: '',   redirectTo: '/choix-stagiaires', pathMatch: 'full' }, // redirige vers la route page1 par défaut

  { path: '**',  component: PageNotFoundComponent } // page non trouvée
];


@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponentComponent,
    StagiaireComponentComponent,
    ListeStagiairesComponentComponent,
    DuelsComponent,
    ResultatsComponent,
    DetailsResultatsComponent,
    PageNotFoundComponent,
    FormStagiaireComponent

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [StagiaireService, DuelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
