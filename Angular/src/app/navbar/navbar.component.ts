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

  userId: number;

  constructor(private _routeServ: Router, private user: UserService, private cookies: CookieService) { }

  logout() {
    this.user.logout();
  }

  ngOnInit() {
    this.userId = parseInt(this.cookies.get('userId'), 10);
  }
  search(searchText: string) {
    console.log(searchText);
    this._routeServ.navigate(['search/' + searchText]);
  }
}
