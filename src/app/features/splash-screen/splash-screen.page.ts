import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: false,
})
export class SplashScreenPage implements OnInit {
  logo: string = 'assets/icon/brand/gabai-small.svg';
  
  constructor(private router: Router) { }

  ngOnInit() {
    // Navigate to get-started screen after animation completes (1.8s + small delay)
    setTimeout(() => {
      this.router.navigate(['/get-started']);
    }, 2100); // 1.8s animation + 0.3s delay
  }

}
