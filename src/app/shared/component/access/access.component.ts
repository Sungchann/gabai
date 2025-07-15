import { Component, OnInit, NgModule } from '@angular/core';
import { AccessService, AccessButtons } from '../../../services/access.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AccessComponent  implements OnInit {
  accessButtons: AccessButtons[] = [];

  constructor(private accessService: AccessService) {}

  ngOnInit() {
    this.accessButtons = this.accessService.getAccessButtons();
  }

  navigateTo(route: string): void {
    this.accessService.navigateTo("/tabs" + route);
  }
}
