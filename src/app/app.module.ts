import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCardComponent } from './components/user-card/user-card.component';
import { UserDescriptionComponent } from './pages/mentor/mentorPage.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PopularComponent } from './pages/home/popular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonStyleDirective } from './directives/button-style.directive';
import { InputStyleDirective } from './directives/input-style.directive';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
import { SearchMentorComponent } from './pages/search-mentor/search-mentor.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthInterceptor } from './interseprots/auth/auth.interceptor';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { UsersService } from './services/usersServiece.service';
import { FollowDirective } from './directives/follow.directive';
import { SignUpExpertComponent } from './pages/sign-up-expert/sign-up-expert.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersCardComponent,
    UserDescriptionComponent,
    FavoritesComponent,
    NotFoundComponent,
    PopularComponent,
    UsersListComponent,
    ButtonStyleDirective,
    InputStyleDirective,
    HeaderContentComponent,
    FooterContentComponent,
    SearchMentorComponent, 
    SignUpComponent,
    LogInComponent,
    UserProfileComponent,
    ProfileComponent,
   ModalComponent,
   FollowDirective,
   SignUpExpertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
