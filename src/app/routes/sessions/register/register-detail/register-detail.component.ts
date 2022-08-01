import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.scss']
})
export class RegisterDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigate(['/profile']);
  }

  onBack() {
    this.router.navigate(['auth/register']);
  }
}
