import { Component, OnInit } from '@angular/core';
import { RedeemPointsService, RedeemItem } from '../../../services/redeem-points.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss'],
  imports: [CommonModule]
})
export class RedeemComponent implements OnInit {
  redeemItems: RedeemItem[] = [];
  
  constructor(private redeemPointsService: RedeemPointsService) { }
  
  ngOnInit(): void {
    // Get all redeem items from service
    this.redeemItems = this.redeemPointsService.getRedeemItems();
  }
  
  redeemReward(item: RedeemItem): void {
    // Implement redemption logic
    console.log(`Redeeming: ${item.title} for ${item.points} points`);
    // Here you would check if user has enough points,
    // then process the redemption and update points balance
  }
}