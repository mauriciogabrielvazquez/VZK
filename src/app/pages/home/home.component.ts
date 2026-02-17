import { Component } from '@angular/core';
import { ExternalLinksComponent } from './components/external-links/external-links.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExternalLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
