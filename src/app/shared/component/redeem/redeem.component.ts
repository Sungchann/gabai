import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { RedeemPointsService, RedeemItem } from '../../../services/redeem-points.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss'],
  imports: [CommonModule]
})
export class RedeemComponent implements OnInit, OnChanges {
  @Input() filterTag: string = 'all';

  redeemItems: RedeemItem[] = [];
  filteredItems: RedeemItem[] = [];

  constructor(private redeemPointsService: RedeemPointsService) { }

  ngOnInit(): void {
    this.redeemItems = this.redeemPointsService.getRedeemItems();
    this.applyFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterTag']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (this.filterTag === 'all') {
      this.filteredItems = this.redeemItems;
    } else {
      this.filteredItems = this.redeemItems.filter(item => item.tag === this.filterTag);
    }
  }

  redeemReward(item: RedeemItem): void {
    console.log(`Redeeming: ${item.title} for ${item.points} points`);
    item.redeemed = true; // Mark as redeemed
  }
}