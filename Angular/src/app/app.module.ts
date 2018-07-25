import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { CookieService } from 'ngx-cookie-service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordComponent } from './password/password.component';
import { PostComponent } from './post/post.component';

import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CommentList } from './shared/commentList.service';
import { ProfileComponent } from './profile/profile.component';
import { PostService } from './shared/post.service';

import { CommentService } from './shared/comment.service';
import { LandingComponent } from './landing/landing.component';
import { OtherprofileComponent } from './otherprofile/otherprofile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: PasswordComponent},
  {path: 'other/:userId', component: OtherprofileComponent},
  {path: 'search/:searchText', component: SearchComponent},
  {path: '', component: LandingComponent},
  {path: '**', component: NotfoundComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PostComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PasswordComponent,
    NotfoundComponent,
    LandingComponent,
    OtherprofileComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), VirtualScrollModule,
  ],
  providers: [
    PostService,
    CommentList,
    NotfoundComponent,
    UserService,
    CookieService,
    HttpClient,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
