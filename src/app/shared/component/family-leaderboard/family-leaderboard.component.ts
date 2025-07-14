import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FamilyService, FamilyMember } from 'src/app/services/family/family.service';
@Component({
  selector: 'app-family-leaderboard',
  templateUrl: './family-leaderboard.component.html',
  styleUrls: ['./family-leaderboard.component.scss'],
  imports: [CommonModule]
})
export class FamilyLeaderboardComponent  implements OnInit, OnChanges {

  @Input() familyKey: string = '';
  members: FamilyMember[] = [];

  constructor(private familyService: FamilyService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['familyKey']) {
      this.loadMembers();
    }
  }

  loadMembers(): void {
    if (this.familyKey) {
      this.members = this.familyService.getMembersByFamilyKey(this.familyKey);
    }
  }

  joinNewMember(): void {
    this.familyService.joinFamily({
      firstName: 'New',
      lastName: 'Member',
      age: 8,
      screenHours: '0 hrs',
      numActivity: '0 activities',
      emoji: '🧒',
      familyKey: this.familyKey
    });
    this.loadMembers(); // Refresh list
  }

}
