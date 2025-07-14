import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesService, Badge } from 'src/app/services/badges.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [CommonModule]
})
export class BadgeComponent  implements OnInit {
  badges: Badge [] = [];

  constructor(private badgesService: BadgesService) { }

  ngOnInit(): void {
    this.badges = this.badgesService.getBadges();
  }

}
