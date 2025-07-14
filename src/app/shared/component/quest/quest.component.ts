import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuestService, Quest } from 'src/app/services/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
  imports: [CommonModule]
})
export class QuestComponent implements OnInit {
  quests: Quest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.quests = this.questService.getAllQuests();
  }

  startQuest(id: string) {
    console.log('Starting quest:', id);
    // Add navigation or other logic here
  }
}
