import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./global/navbar/navbar.component";
import { LandingComponent } from "./global/landing/landing.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
