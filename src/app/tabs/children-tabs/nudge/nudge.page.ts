
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NudgeService } from 'src/app/services/nudge.service';



@Component({
  selector: 'app-nudge',
  templateUrl: './nudge.page.html',
  styleUrls: ['./nudge.page.scss'],
  standalone: false,
})

export class NudgePage implements OnInit {
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
