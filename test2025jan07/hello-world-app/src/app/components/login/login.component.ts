import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  rememberMe = false;

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login attempt:', this.loginData);
    // Here you would typically call an authentication service
    // For demo purposes, we'll just navigate to the main page
    alert('Login successful! (Demo)');
    this.router.navigate(['/main']);
  }
}