import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import {  SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PopularComponent } from './pages/home/popular.component';
import { UserDescriptionComponent } from './pages/mentor/mentorPage.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SearchMentorComponent } from './pages/search-mentor/search-mentor.component';
import { SignUpExpertComponent } from './pages/sign-up-expert/sign-up-expert.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'popular'
  },
  {
    path:'profile',
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"popular",
    component:PopularComponent
  },
  {
    path:"favorites",
    component:FavoritesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'favorites/:id',
    component:UserDescriptionComponent,
    canActivate:[AuthGuard]
  },
  {
  path:'popular/:id',
  component:UserDescriptionComponent,
  canActivate:[AuthGuard]
},
{
  path:'search/:id',
  component:UserDescriptionComponent,
  canActivate:[AuthGuard]
},
{
path:'search',
component:SearchMentorComponent,
canActivate:[AuthGuard]
},
{
  path:"login",
  component:LogInComponent
},
{
  path:'sign-up',
  component:SignUpComponent
},
{
  path:'mentor/signUp',
  component:SignUpExpertComponent
},
  {
    path: '**',
    component:NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
