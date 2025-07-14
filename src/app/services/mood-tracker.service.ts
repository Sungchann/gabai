import { Injectable } from '@angular/core';

export interface Mood {
  id: string;
  name: string;
  svgPath: string;
  selected?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MoodTrackerService {
  private moods: Mood[] = [
    { id: 'happy', name: 'Happy', svgPath: 'assets/icon/moods/happy.svg' },
    { id: 'sleepy', name: 'Sleepy', svgPath: 'assets/icon/moods/sleepy.svg' },
    { id: 'angry', name: 'Angry', svgPath: 'assets/icon/moods/angry.svg' },
    { id: 'aweful', name: 'Terrible', svgPath: 'assets/icon/moods/aweful.svg' },
    { id: 'neutral', name: 'Calm', svgPath: 'assets/icon/moods/neutral.svg' }
  ];

  private userName: string = 'Emma'; 

  constructor() { }

  getMoods(): Mood[] {
    return this.moods;
  }

  getUserName(): string {
    return this.userName;
  }
}