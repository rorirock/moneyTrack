import { Component, EventEmitter, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  
  @Output() emitShowMenu = new EventEmitter<boolean>();
  showMenu: boolean=true


  emitActiveMenu(){
    this.showMenu = !this.showMenu
    this.emitShowMenu.emit(this.showMenu)
  }

}
