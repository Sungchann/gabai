import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: false
})
export class OnboardingPage implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigateToJoinFamily() {
    this.authService.role = 'parent'; // Set default role to parent
    this.router.navigate(['/tabs/tabs/tab1']);
    this.authService.setRole('parent'); // Ensure role is set in AuthService
  }

  navigateToAssessment(){
    this.authService.role = 'child'; // Set default role to parent
    this.router.navigate(['/assessment']);
    this.authService.setRole('child'); // Ensure role is set in AuthService
  }



}
