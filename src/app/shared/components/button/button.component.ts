import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string | undefined;
  @Input() variante: string = "primary"
  @Output() buttonClick = new EventEmitter<void>();
  @Input() disabled: boolean | undefined;

  onButtonClick() {
    this.buttonClick.emit();
  }
}