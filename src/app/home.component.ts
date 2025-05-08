import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <h1>Welcome to the Host App</h1>
    <p>This is the home page of the Micro Frontend architecture.</p>
  `,
})
export class HomeComponent {}
