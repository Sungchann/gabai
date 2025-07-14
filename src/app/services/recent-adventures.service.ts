import { Injectable } from '@angular/core';

export interface Adventure {
  title: string;
  emoji: string;
  points: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class RecentAdventuresService {
  adventures: Adventure[] = [
    {
      title: 'Record a story for mama',
      emoji: '🎤',
      points: 50,
      date: new Date(Date.now() - 30 * 1000) // 30 seconds ago
    },
    {
      title: 'Draw your family tree',
      emoji: '🌳',
      points: 75,
      date: new Date(Date.now() - 60 * 60 * 1000) // 1 hour ago
    },
    {
      title: 'Teach a family member something new',
      emoji: '👨‍🏫',
      points: 100,
      date: new Date('2025-07-13T10:30:00')
    },
    {
      title: 'Create a gratitude song',
      emoji: '🎶',
      points: 60,
      date: new Date('2025-07-12T15:45:00')
    },
    {
      title: 'Make a family recipe together',
      emoji: '🍲',
      points: 80,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      title: 'Write a letter to a loved one',
      emoji: '✉️',
      points: 70,
      date: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      title: 'Plant a seed and watch it grow',
      emoji: '🌱',
      points: 90,
      date: new Date('2025-07-11T09:00:00')
    },
    {
      title: 'Share your favorite childhood game',
      emoji: '🎲',
      points: 65,
      date: new Date('2025-07-10T17:20:00')
    }
  ];

  constructor() { }

  getRecentAdventures(): Adventure[] {
    return this.adventures;
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffSec < 60) {
      return `${diffSec} seconds ago`;
    } else if (diffMin < 60) {
      return `${diffMin} minutes ago`;
    } else if (diffHour < 24) {
      return `${diffHour} hours ago`;
    } else if (diffDay < 7) {
      return `${diffDay} days ago`;
    } else if (diffWeek < 4) {
      return `${diffWeek} weeks ago`;
    } else if (diffMonth < 12) {
      return `${diffMonth} months ago`;
    } else {
      return `${diffYear} years ago`;
    }
  }
}
