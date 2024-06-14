import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  onClick() {
    this.btnClick.emit()
  }
  @Output() btnClick = new EventEmitter()
  @Input()
  color!: string
  @Input()
  text!: string

}
