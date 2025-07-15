import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() label: any = 'Click Me';
  @Input() icon: string = '';
  @Input() color: 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'white' = 'white';
  @Input() textColor: string = 'white';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() inactive: boolean = false;

  @Output() buttonClick = new EventEmitter<Event>();
  @Output() buttonHover = new EventEmitter<Event>();
  @Output() buttonFocus = new EventEmitter<Event>();
  @Output() buttonBlur = new EventEmitter<Event>();

  onClick(event: Event) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  onHover(event: Event) {
    if (!this.disabled) {
      this.buttonHover.emit(event);
    }
  }

  onFocus(event: Event) {
    if (!this.disabled) {
      this.buttonFocus.emit(event);
    }
  }

  onBlur(event: Event) {
    this.buttonBlur.emit(event);
  }

  getSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return '!px-3 !py-1.5 !text-sm';
      case 'medium':
        return '!px-4 !py-2 !text-base';
      case 'large':
        return '!px-6 !py-3 !text-lg';
      default:
        return '!px-4 !py-2 !text-base';
    }
  }
}