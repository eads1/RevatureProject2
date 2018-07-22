import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFile: any;
  name: string;
  profile_pic = 'http://images6.fanpop.com/image/photos/38500000/Takeo-the-handsome-my-love-story-ore-monogatari-38582718-500-280.jpg';
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
}
