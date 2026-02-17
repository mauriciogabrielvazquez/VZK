import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-external-links',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './external-links.component.html',
  styleUrl: './external-links.component.scss'
})
export class ExternalLinksComponent {

}
