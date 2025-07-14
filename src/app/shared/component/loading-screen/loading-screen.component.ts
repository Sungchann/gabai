import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  standalone: true,
  imports: [] // Add required imports if this is a standalone component
})
export class LoadingScreenComponent implements OnInit {
  @Input() redirectDelay: number = 2000; // Default to 2 seconds
  @Input() redirectPath: string = '/tabs'; // Default to tabs path

  constructor(private router: Router) {}

  ngOnInit() {
    // Set timeout to navigate after specified delay
    setTimeout(() => {
      this.router.navigateByUrl(this.redirectPath);
    }, this.redirectDelay);
  }
}
