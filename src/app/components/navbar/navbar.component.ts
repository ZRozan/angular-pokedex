import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'pkdex-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
