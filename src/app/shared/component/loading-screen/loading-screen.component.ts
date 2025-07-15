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

  constructor(private router: Router) {}
  
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/tabs/tabs/tab1']);
    }, 2100); // 1.8s animation + 0.3s delay
  }
}
