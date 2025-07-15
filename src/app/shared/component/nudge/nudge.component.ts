import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputFormComponent } from '../input-form/input-form.component';
import { ButtonComponent } from '../button/button.component';
import { NudgeService } from 'src/app/services/nudge.service';


@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.component.html',
  styleUrls: ['./nudge.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule, InputFormComponent, ButtonComponent]
})

export class NudgeComponent implements OnInit {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  nudges: string[] = [];
  loading = true;
  error: string | null = null;

  constructor(private nudgeService: NudgeService) {}

ngOnInit(): void {
  const staticUserId = '1'; 
  this.nudgeService.predictChildNudges(staticUserId).subscribe({
    next: (res) => {
      // Get the first nudge's text, or fallback if not found
      this.nudges = res?.nudges?.length ? [res.nudges[0].text] : ['No nudges found'];
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Failed to load nudges.';
      this.loading = false;
    }
  });
}

  closePopup(): void {
    this.close.emit();
  }
}

