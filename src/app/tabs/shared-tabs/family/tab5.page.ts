import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {
  moodScores = [
    { day: 'Mon', score: 6 },
    { day: 'Tue', score: 8 },
    { day: 'Wed', score: 7 },
    { day: 'Thu', score: 5 },
    { day: 'Fri', score: 9 },
    { day: 'Sat', score: 10 },
    { day: 'Sun', score: 7 }
  ];


  constructor() {}

  getMoodColor(score: number): string {
    if (score >= 9) return '#7274ED';     
    if (score >= 7) return '#7274ED';     
    if (score >= 5) return '#7274ED';     
    return '#F44336';    
  }

}
