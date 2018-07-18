import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedFile: File;
  constructor(private router: Router, private reg: RegisterService, private http: HttpClient) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const firstname = document.getElementById('fname');
    const lastname = document.getElementById('lname');
    const email = document.getElementById('email');
    const profile = this.selectedFile;

    this.reg.registerAccount().subscribe();
  }

}
