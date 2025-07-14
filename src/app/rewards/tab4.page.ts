import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
  rewards = [
    { label: 'All Rewards', icon: 'wallet-outline', tag: 'all' },
    { label: 'Family Time', icon: 'people-outline', tag: 'family' },
    { label: 'Recognition', icon: 'star-outline', tag: 'recognition' },
    { label: 'Special Privileges', icon: 'medal-outline', tag: 'privileges' },
    { label: 'My Choice', icon: 'heart-outline', tag: 'choice' },
    { label: 'Connections', icon: 'gift-outline', tag: 'connections' }
  ];

  constructor() {}

  selectedReward: any = this.rewards[0]; // default selected (optional)
  selectedRewardTag: string = 'all';

  selectReward(reward: any) {
    this.selectedReward = reward;
    this.selectedRewardTag = reward.tag;
  }
}
