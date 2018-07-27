import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userId = 0;

  constructor(private _routeServ: Router, private user: UserService, private cookies: CookieService) { }

  logout() {
    this.user.logout();
  }

  ngOnInit() {
    if (this.user.isLoggedIn) {
      this.userId = this.user.userId;
    }
  }

  search(searchText: string) {
    this._routeServ.navigate(['search/' + searchText]);
  }
  updateUserId() {
    this.userId = this.user.userId;
  }
}
