import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
