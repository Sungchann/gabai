import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputFormComponent } from '../input-form/input-form.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-wishlist-form',
  templateUrl: './wishlist-form.component.html',
  styleUrls: ['./wishlist-form.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule, InputFormComponent, ButtonComponent]
})
export class WishlistFormComponent  implements OnInit {

  @Output() formSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    // Emit the form submission event to parent component
    this.formSubmit.emit({
      message: 'Wishlist item submitted successfully!'
    });
  }
}
