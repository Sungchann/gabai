import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-family',
  templateUrl: './join-family.page.html',
  styleUrls: ['./join-family.page.scss'],
  standalone: false
})
export class JoinFamilyPage implements OnInit {
  familyId: string = ""
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToCreateFam(){
    
  }

  navigateToJoinFam(){
    
  }

  onInputChange(value: any) {
    this.familyId = value;
  }
}
