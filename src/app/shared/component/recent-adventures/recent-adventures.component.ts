import { Component, OnInit } from '@angular/core';
import { RecentAdventuresService, Adventure } from '../../../services/recent-adventures.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-adventures',
  templateUrl: './recent-adventures.component.html',
  styleUrls: ['./recent-adventures.component.scss'],
  imports: [CommonModule],
})
export class RecentAdventuresComponent  implements OnInit {
  recentAdventures: Adventure[] = [];

  constructor(private recentAdventuresService: RecentAdventuresService) { }

  ngOnInit() {
    this.recentAdventures = this.recentAdventuresService.getRecentAdventures();
  }

  getTimeAgo(date: Date): string {
    return this.recentAdventuresService.getTimeAgo(date);
  }

}
