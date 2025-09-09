import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
@Component({
  selector: 'app-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit, OnDestroy {
  user = { name: '', email: '' };
  ngOnInit(): void {
    console.log("User component initialized.");
  }

  ngOnDestroy(): void {
    console.log("User component destroyed.");
  }
  onSubmit() {
    console.log('User Form Submitted:', this.user);
  } 
}

