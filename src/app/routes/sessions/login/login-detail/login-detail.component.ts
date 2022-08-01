import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.scss']
})
export class LoginDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onForgot() {
    console.log('forgot is coming');
  }

  onLogin() {
    this.router.navigate(['/activity']);
  }

  onBack() {
    this.router.navigate(['auth/login']);
  }
}
