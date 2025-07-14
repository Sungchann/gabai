import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonIcon } from "@ionic/angular/standalone";
import { DailyProgress, QuestProgressService } from 'src/app/services/quest-progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  standalone: true,
  imports: [IonicModule],
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  progress: DailyProgress = {
    completedQuests: 0,
    totalQuests: 0,
    pointsEarned: 0,
    progressPercentage: 0
  };

  constructor(private questProgressService: QuestProgressService) { }

  ngOnInit() {
    this.questProgressService.dailyProgress$.subscribe(progress => {
      this.progress = progress;
    });
  }
}
