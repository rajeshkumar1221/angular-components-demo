import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./components/user/user";
import { Admin } from "./components/admin/admin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Admin],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('angular-components-demo');
  
}
