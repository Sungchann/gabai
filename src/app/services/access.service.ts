import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AccessButtons {
  route: string;
  icon: string;
  name: string;
  subname: string;
  color: string;
  border: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  accessButtons: AccessButtons[] = [
    {
      route: '/tabs/tab3',
      icon: 'gift-outline',
      name: 'Gift Quests',
      subname: 'Share your talents!',
      color: '#7ECC71',
      border: '#6AAB5F'
    },
    {
      route: '/tabs/tab2',
      icon: 'medal-outline',
      name: 'My Badges',
      subname: 'See your growth!',
      color: '#1FA7E1',
      border: '#1887B6'
    },
  ]

  constructor(private router: Router) { }

  getAccessButtons(): AccessButtons[] {
    return [...this.accessButtons];
  }

  navigateTo(route: string): void {
   this. router.navigate([route]).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
