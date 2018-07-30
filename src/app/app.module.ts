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
import { NavigationComponent } from './navigation/navigation.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ParticiperDuelComponent } from './participer-duel/participer-duel.component';
import { ResultatsService } from './services/resultats.service';


const appRoutes: Routes = [
  
  { path: '', component: ChoixStagiaireComponent }, // /page1 affiche le composant A

  {
    path: ':id_stagiaire',
    component : NavigationComponent, // qui contient <router-outlet></router-outlet> et le menu
    children: [
      { path: 'duels', component: DuelsComponent }, // /page2 affiche le composant B

      { path: 'duels/:id_duel', component: ParticiperDuelComponent },

      { path: 'resultats-duels', component: ResultatsComponent },

      { path: 'resultats/:id_duel', component: DetailsResultatsComponent },

      { path: 'profil', component: FormStagiaireComponent }

    ]
  },

  //{ path: '',   redirectTo: '/choix-stagiaires', pathMatch: 'full' }, // redirige vers la route page1 par défaut

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
    FormStagiaireComponent,
    NavigationComponent,
    FilterPipe,
    ParticiperDuelComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [StagiaireService, DuelService, ResultatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
