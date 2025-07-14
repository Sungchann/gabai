import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MoodTrackerService, Mood } from '../../../services/mood-tracker.service';

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MoodTrackerComponent implements OnInit {
  moods: Mood[] = [];
  selectedMood: Mood | null = null;
  userInput: string = '';
  username: string = '';

  constructor(
    private moodService: MoodTrackerService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.moods = this.moodService.getMoods();
    this.username = this.moodService.getUserName();
  }

  selectMood(mood: Mood): void {
    this.moods.forEach(m => m.selected = false);
    mood.selected = true;
    this.selectedMood = mood;
  }

  async submitMood(): Promise<void> {
    if (this.selectedMood && this.userInput) {
      const moodData = {
        mood: this.selectedMood.name,
        comment: this.userInput
      };
      
      console.log('Mood:', moodData.mood, 'Comment:', moodData.comment);
      
      // Close the modal with the data before resetting
      await this.modalController.dismiss(moodData);
      
      // Reset form after submission
      this.moods.forEach(m => m.selected = false);
      this.selectedMood = null;
      this.userInput = '';
    }
  }

  async closeModal(): Promise<void> {
    await this.modalController.dismiss();
  }
}