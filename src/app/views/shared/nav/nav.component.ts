import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  options = [
    {label: 'Inicio', icon: '../../../../assets/image/home_menu.svg' },
    {label: 'Contratos', icon: '../../../../assets/image/hoja1.svg' },
    {label: 'Acciones', icon: '../../../../assets/image/Tool.svg' },
    {label: 'Objetivos', icon: '../../../../assets/image/star.svg' },
    {label: 'Herramientas', icon: '../../../../assets/image/money.svg' },
    {label: 'Servicio al cliente', icon: '../../../../assets/image/talk2.svg' },
  ]

  @Input() showMenu: boolean = true
 


 

}
