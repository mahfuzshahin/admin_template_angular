import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private router: Router) {}
  onLogin() {
    // Example: hardcoded user for demo
    const dummyUser = { email: 'admin@example.com', password: '123456' };

    if (this.email === dummyUser.email && this.password === dummyUser.password) {
      // Save user data in sessionStorage
      sessionStorage.setItem('user', JSON.stringify(dummyUser));

      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
