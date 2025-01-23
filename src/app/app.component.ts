import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./views/shared/toolbar/toolbar.component";
import { FooterComponent } from "./views/shared/footer/footer.component";
import { NavComponent } from "./views/shared/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moneyTrack';

  activeMenu: boolean = true
  showMenu(event: boolean){
    this.activeMenu = event
  }
}
