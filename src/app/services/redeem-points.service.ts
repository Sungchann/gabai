import { Injectable } from '@angular/core';

export interface RedeemItem {
  id: number;
  emoji: string;
  title: string;
  description: string;
  points: number;
  color: string;
  border: string;
  tag: string;
  redeemed?: boolean; // Optional field
}
@Injectable({
  providedIn: 'root'
})
export class RedeemPointsService {
  private redeemItems: RedeemItem[] = [
    {
      id: 1,
      emoji: '🍿',
      title: 'Family Movie Night',
      description: 'Choose the next family movie and get cozy',
      points: 100,
      color: '#9956DE',
      border: '#6e2baf',
      tag: 'family'
    },
    {
      id: 2,
      emoji: '🎨',
      title: 'Artwork in Hall of Fame',
      description: 'Display your latest creation on the family fridge with a special frame!',
      points: 50,
      color: '#1FA7E1',
      border: '#1083b4',
      tag: 'recognition'
    },
    {
      id: 3,
      emoji: '🌙',
      title: 'Extra 30 Minutes Before Bed',
      description: 'Stay up a little later to read or play quietly',
      points: 75,
      color: '#2cafae',
      border: '#1b807d',
      tag: 'privileges'
    },
    {
      id: 4,
      emoji: '👥',
      title: 'Special One-on-One Time',
      description: 'Spend quality time doing your favorite activity with mom or dad',
      points: 150,
      color: '#75D06A',
      border: '#38ac3f',
      tag: 'family'
    },
    {
      id: 5,
      emoji: '🥞',
      title: 'Choose Tomorrow\'s Breakfast',
      description: 'Pick what the whole family eats for breakfast!',
      points: 30,
      color: '#FFB356',
      border: '#df832d',
      tag: 'choice'
    },
    {
      id: 6,
      emoji: '📱',
      title: 'Lola/Lolo Video Call',
      description: 'Schedule a special video call to share your recent adventures',
      points: 40,
      color: '#FF8B8B',
      border: '#dc6969',
      tag: 'connections'
    },
    {
      id: 7,
      emoji: '🎲',
      title: 'Family Game Champion',
      description: 'Choose the next family board game or card game',
      points: 80,
      color: '#9956DE',
      border: '#6e2baf',
      tag: 'family'
    },
    {
      id: 8,
      emoji: '🏆',
      title: 'Helper of the Day Badge',
      description: 'Get special recognition and a small chore-free day',
      points: 60,
      color: '#1FA7E1',
      border: '#1083b4',
      tag: 'recognition'
    }
  ];

  constructor() { }

  /**
   * Get all available redeem items
   */
  getRedeemItems(): RedeemItem[] {
    return [...this.redeemItems]; // Return a copy to prevent direct mutation
  }

  /**
   * Get a specific redeem item by ID
   */
  getRedeemItem(id: number): RedeemItem | undefined {
    return this.redeemItems.find(item => item.id === id);
  }

  /**
   * Get redeem items sorted by point value (ascending)
   */
  getItemsSortedByPoints(): RedeemItem[] {
    return [...this.redeemItems].sort((a, b) => a.points - b.points);
  }
}