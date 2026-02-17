import { Component } from '@angular/core';
import { MainFilterComponent } from '../main-filter/main-filter.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MainFilterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
