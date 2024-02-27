import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: "pkdex-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = "proj-angular-pokedex";
}
