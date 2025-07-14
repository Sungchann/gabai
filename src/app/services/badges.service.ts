import { Injectable } from '@angular/core';

export interface Badge {
  id: number;
  emoji: string;
  background: string;
  border: string;
  title: string;
  message: string;
  progress: number;
  earned: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BadgesService {
  private badges: Badge[] = [
    {
      id: 1,
      emoji: '📚',
      background: '#9956DE',
      border: '#6e2baf',
      title: 'Bookworm',
      message: 'Completed reading 5 books this month!',
      progress: 100,
      earned: true
    },
    {
      id: 2,
      emoji: '🚴‍♂️',
      background: '#1FA7E1',
      border: '#1083b4',
      title: 'Cyclist',
      message: 'Biked 20 kilometers in a week!',
      progress: 80,
      earned: false
    },
    {
      id: 3,
      emoji: '🍎',
      background: '#2cafae',
      border: '#1b807d',
      title: 'Healthy Eater',
      message: 'Ate fruits and veggies every day for a week!',
      progress: 60,
      earned: false
    },
    {
      id: 4,
      emoji: '🧹',
      background: '#75D06A',
      border: '#38ac3f',
      title: 'Clean Room',
      message: 'Kept your room tidy for 7 days straight!',
      progress: 100,
      earned: true
    },
    {
      id: 5,
      emoji: '🎼',
      background: '#FFB356',
      border: '#df832d',
      title: 'Music Maestro',
      message: 'Practiced your instrument every day this week!',
      progress: 90,
      earned: false
    },
    {
      id: 6,
      emoji: '🤝',
      background: '#FF8B8B',
      border: '#dc6969',
      title: 'Kindness Star',
      message: 'Helped a friend or family member in need!',
      progress: 100,
      earned: true
    },
    {
      id: 7,
      emoji: '🌳',
      background: '#9956DE',
      border: '#6e2baf',
      title: 'Nature Explorer',
      message: 'Went on three nature walks this month!',
      progress: 70,
      earned: false
    },
    {
      id: 8,
      emoji: '📝',
      background: '#1FA7E1',
      border: '#1083b4',
      title: 'Homework Hero',
      message: 'Completed all homework assignments on time for two weeks!',
      progress: 100,
      earned: true
    }
  ];

  constructor() { }

  /**
   * Get all badges
   */
  getBadges(): Badge[] {
    return [...this.badges];
  }

  /**
   * Get a specific badge by ID
   */
  getBadge(id: number): Badge | undefined {
    return this.badges.find(badge => badge.id === id);
  }

  /**
   * Get badges sorted by progress (ascending)
   */
  getBadgesSortedByProgress(): Badge[] {
    return [...this.badges].sort((a, b) => a.progress - b.progress);
  }
}