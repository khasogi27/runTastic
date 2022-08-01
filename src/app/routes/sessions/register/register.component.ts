import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigate(['/auth/register/detail']);
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
