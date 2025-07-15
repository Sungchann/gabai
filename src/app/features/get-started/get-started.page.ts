import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
  standalone: false,
})
export class GetStartedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNext() {
    this.router.navigate(['/get-started-two']);
  }
}
