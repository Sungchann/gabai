import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { MoodTrackerComponent } from '../shared/component/mood-tracker/mood-tracker.component';
import { MoodTrackerComponent } from 'src/app/shared/component/mood-tracker/mood-tracker.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  logo: string = 'assets/icon/brand/gabai-small.svg';
  chatbotLogo: string = 'assets/icon/brand/gabai-chatbot.svg';
  currentChild: any = null;
  userId = '1'; // or get this from auth
  showNudgeDialog = false;
  isNudgeDialogClosing = false;

  constructor(private modalController: ModalController, private authService: AuthService) {}

  ngOnInit() {
    if (!this.hasTrackedMoodToday()) {
      this.presentMoodTrackerModal();
    }
    this.authService.currentChild$.subscribe(child => {
      this.currentChild = child;
    });

    setTimeout(() => {
      this.showNudgeDialog = true;
    }, 5000);
  }

  get isChild(): boolean {
    return this.authService.role === 'child';
  }

  get children(): any[] {
    return this.authService.children;
  }

  goToChildProfile(childId: string) {
    this.authService.setChild(childId);
  }

  
  onNudgeBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('dialog-backdrop')) {
      this.closeNudgePopup();
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
        localStorage.setItem('lastMoodTracked', new Date().toDateString());
        console.log('Mood tracked:', result.data);
      }
    });

    return await modal.present();
  }

  closeNudgePopup() {
    this.isNudgeDialogClosing = true;
    setTimeout(() => {
      this.showNudgeDialog = false;
      this.isNudgeDialogClosing = false;
    }, 300); // match your fade-out animation duration
  }

}




