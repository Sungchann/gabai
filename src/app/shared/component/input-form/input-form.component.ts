import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class InputFormComponent  implements OnInit {
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() options: string[] | undefined ; 

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onValueChange(event: any){
    this.valueChange.emit(event.target.value)
  }
}
