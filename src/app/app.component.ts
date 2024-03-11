import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { LoginComponent } from '../pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'market-app';
}
