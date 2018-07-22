import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './shared/register.service';
import { PostService } from './shared/post.service';
import { CommentList } from './shared/commentList.service';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { ResetpasswordService } from './shared/resetpassword.service';
import { UpdateaccountService } from './shared/updateaccount.service';
import { OtherprofileComponent } from './otherprofile/otherprofile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:fname/:lname/:email', component: ProfileComponent},
  {path: 'reset', component: PasswordComponent},
  {path: 'other', component: OtherprofileComponent},
  {path: 'other/:fname/:lname/:email', component: OtherprofileComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent, canActivate: [AuthGuard]},
];

import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoggedInGuard } from './guards/logged-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PostComponent,
    RegisterComponent,
    ProfileComponent,
    PasswordComponent,
    OtherprofileComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
  ],
  providers: [
    RegisterService,
    PostService,
    CommentList,
    ResetpasswordService,
    UpdateaccountService,
    NotfoundComponent,
    UserService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
