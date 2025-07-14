import { Injectable } from '@angular/core';
import { QuestService, Quest } from './quest.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DailyProgress {
  completedQuests: number;
  totalQuests: number;
  pointsEarned: number;
  progressPercentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuestProgressService {
  private _dailyProgress = new BehaviorSubject<DailyProgress>({
    completedQuests: 0,
    totalQuests: 0,
    pointsEarned: 0,
    progressPercentage: 0
  });

  dailyProgress$ = this._dailyProgress.asObservable();

  constructor(private questService: QuestService) { 
    // Comment out dynamic calculation and use preset values instead
    // this.updateProgress();
    this.setMockProgress(2, 5, 125, 0.8);
  }

  // Add this method to set specific values
  setMockProgress(completed: number, total: number, points: number, percent: number): void {
    this._dailyProgress.next({
      completedQuests: completed,
      totalQuests: total,
      pointsEarned: points,
      progressPercentage: percent
    });
  }

  updateProgress(): void {
    const allQuests = this.questService.getAllQuests();
    const completedQuests = allQuests.filter(quest => quest.completed);
    const pointsEarned = completedQuests.reduce((total, quest) => total + quest.points, 0);
    const progressPercentage = allQuests.length > 0 ? 
      completedQuests.length / allQuests.length : 0;

    this._dailyProgress.next({
      completedQuests: completedQuests.length,
      totalQuests: allQuests.length,
      pointsEarned: pointsEarned,
      progressPercentage: progressPercentage
    });
  }

  completeQuest(questId: string): void {
    this.questService.completeQuest(questId);
    this.updateProgress();
  }
}
