import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoodTrackerComponent } from '../shared/component/mood-tracker/mood-tracker.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  logo: string = 'assets/icon/brand/gabai-small.svg';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Check if mood has been tracked today
    if (!this.hasTrackedMoodToday()) {
      setTimeout(() => {
        this.presentMoodTrackerModal();
      }, 1000); // Delay to ensure page is fully loaded
    }
  }

  private hasTrackedMoodToday(): boolean {
    const lastTracked = localStorage.getItem('lastMoodTracked');
    const today = new Date().toDateString();
    return lastTracked === today;
  }

  async presentMoodTrackerModal() {
    const modal = await this.modalController.create({
      component: MoodTrackerComponent,
      cssClass: 'mood-tracker-modal',
      backdropDismiss: true
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // Save that mood was tracked today
        localStorage.setItem('lastMoodTracked', new Date().toDateString());
        console.log('Mood tracked:', result.data);
      }
    });

    return await modal.present();
  }

}
