import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/auth/login/detail']);
  }

  onBack() {
    this.router.navigate(['auth/sessions']);
  }

  onAuth(args: string) {
    if (args !== 'google') {
      console.log('auth google is coming');
      return;
    }
    console.log('auth facebook is coming');
  }

}
