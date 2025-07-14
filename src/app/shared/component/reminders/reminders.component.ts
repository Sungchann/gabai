import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GenerateRemindersService, Reminder } from 'src/app/services/generate-reminders.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RemindersComponent implements OnInit {
  reminder: Reminder;
  currentPage!: string;

  constructor(
    private reminderService: GenerateRemindersService,
    private router: Router
  ) {
    // Get the current route without leading slash
    const url = this.router.url;
    const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
    console.log(url, cleanUrl)
    
    // Find the reminder for this route
    const matchingReminders = this.reminderService.getAllReminders()
      .filter(r => r.route === cleanUrl);
    
    if (matchingReminders.length > 0) {
      this.reminder = matchingReminders[0];
    } else {
      // Fallback to a random reminder if none found for this route
      this.reminder = this.reminderService.getRandomReminder();
    }
  }

  ngOnInit() {}
}
