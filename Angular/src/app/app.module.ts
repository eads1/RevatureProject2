import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostService } from './shared/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './shared/register.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';
import { CommentList } from './shared/commentList.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PostComponent,
    RegisterComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RegisterService, PostService, CommentList, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
