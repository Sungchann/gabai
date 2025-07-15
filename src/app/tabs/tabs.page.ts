import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {
  role: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.role;
  }
}
