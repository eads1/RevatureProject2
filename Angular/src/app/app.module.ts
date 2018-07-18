import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './shared/register.service';

const routes: Routes = [
  {path: '/login', component: LoginPageComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/post', component: PostComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    PostComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes),
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
