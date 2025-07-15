import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started-two',
  templateUrl: './get-started-two.page.html',
  styleUrls: ['./get-started-two.page.scss'],
  standalone: false
})
export class GetStartedTwoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNext() {
    this.router.navigate(['/onboarding']);
  }
}
