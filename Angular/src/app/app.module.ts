import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordComponent } from './password/password.component';
import { PostComponent } from './post/post.component';

import { RegisterService } from './shared/register.service';
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

import { ResetpasswordService } from './shared/resetpassword.service';
import { CommentService } from './shared/comment.service';

const routes: Routes = [
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'reset', component: PasswordComponent},
  {path: '', component: HomeComponent},
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
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
  ],
  providers: [
    RegisterService,
    PostService,
    CommentList,
    ResetpasswordService,
    NotfoundComponent,
    UserService,
    CookieService,
    HttpClient,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
