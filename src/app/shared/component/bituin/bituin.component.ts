import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bituin',
  templateUrl: './bituin.component.html',
  styleUrls: ['./bituin.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class BituinComponent  implements OnInit {
  @Input() bituins: number = 0;
  
  constructor() { }

  ngOnInit() {}

}
