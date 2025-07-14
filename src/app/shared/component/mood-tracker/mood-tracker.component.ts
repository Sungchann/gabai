import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodTrackerService, Mood } from '../../../services/mood-tracker.service';

@Component({
  selector: 'app-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MoodTrackerComponent implements OnInit {
  moods: Mood[] = [];
  selectedMood: Mood | null = null;
  userInput: string = '';
  username: string = '';

  constructor(private moodService: MoodTrackerService) { }

  ngOnInit(): void {
    this.moods = this.moodService.getMoods();
    this.username = this.moodService.getUserName();
  }

  selectMood(mood: Mood): void {
    this.moods.forEach(m => m.selected = false);
    mood.selected = true;
    this.selectedMood = mood;
  }

  submitMood(): void {
    if (this.selectedMood && this.userInput) {
      console.log('Mood:', this.selectedMood.name, 'Comment:', this.userInput);
      // Reset form after submission
      this.moods.forEach(m => m.selected = false);
      this.selectedMood = null;
      this.userInput = '';
    }
  }
}