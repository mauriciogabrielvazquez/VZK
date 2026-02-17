import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExternalLinksComponent } from './pages/home/components/external-links/external-links.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MainFilterComponent } from './shared/components/main-filter/main-filter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExternalLinksComponent, NavbarComponent, MainFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Travel';
}
