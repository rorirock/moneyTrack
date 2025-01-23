import { Component } from '@angular/core';
import { TargetCardComponent } from "../../core/components/target-card/target-card.component";
import { CarouselComponent } from '../../core/components/carousel/carousel.component';
import { ButtonComponent } from "../../core/components/form/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TargetCardComponent, CarouselComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
