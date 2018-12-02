import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AjoutDonneeComponent } from './components/ajout-donnee/ajout-donnee.component';
const routes: Routes = [
	{path: 'accueil', component: HomeComponent},
	{path: 'statisques', component: StatsComponent},
	{path: 'se-connecter', component: SigninComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'ajout-donnee', component: AjoutDonneeComponent},
	{path: '', pathMatch: 'full', redirectTo: 'accueil'}
];

export const routerComponents = [
	HomeComponent, 
	StatsComponent,
	SigninComponent,
	ProfileComponent,
	AjoutDonneeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
