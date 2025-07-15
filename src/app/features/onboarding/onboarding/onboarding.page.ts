import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: false
})
export class OnboardingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToJoinFamily() {
    this.router.navigate(['/onboarding']);
  }

  navigateToAssessment(){
    this.router.navigate(['/assessment']);
  }

}
