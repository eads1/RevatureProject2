import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
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
  {path: 'login', component: LoginPageComponent},
  {path: 'post', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:fname/:lname/:email', component: ProfileComponent},
  {path: 'reset', component: PasswordComponent},
  {path: 'other', component: OtherprofileComponent},
  {path: 'other/:fname/:lname/:email', component: OtherprofileComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
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
  providers: [RegisterService, PostService, CommentList, ResetpasswordService, UpdateaccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
