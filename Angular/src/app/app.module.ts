import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OtherprofileComponent } from './otherprofile/otherprofile.component';
import { PasswordComponent } from './password/password.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { CommentList } from './shared/commentList.service';
import { PostService } from './shared/post.service';
import { RegisterService } from './shared/register.service';
import { ResetpasswordService } from './shared/resetpassword.service';
import { UpdateaccountService } from './shared/updateaccount.service';
import { UserService } from './shared/user.service';

const routes: Routes = [
  {path: 'post', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:fname/:lname/:email', component: ProfileComponent},
  {path: 'reset', component: PasswordComponent},
  {path: 'other', component: OtherprofileComponent},
  {path: 'other/:fname/:lname/:email', component: OtherprofileComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: NotfoundComponent, canActivate: [AuthGuard]},
];

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
    UpdateaccountService,
    NotfoundComponent,
    UserService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
