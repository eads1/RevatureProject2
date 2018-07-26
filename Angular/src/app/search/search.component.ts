import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private users;
  private hasResults = false;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.searchUser(params['searchText']).subscribe( response => {
        this.users = response;
        console.log(this.users);
        if (this.users.length !== 0) {
          this.hasResults = true;
        }
      });
    });
  }

}
