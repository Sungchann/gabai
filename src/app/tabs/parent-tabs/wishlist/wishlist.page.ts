import { Component, OnInit } from '@angular/core';
import { WishlistService, WishlistItem } from 'src/app/services/wishlist/wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: false
})
export class WishlistPage implements OnInit {
  wishlistItems: WishlistItem[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    //generetate wishlist item
    this.wishlistItems = this.wishlistService.getWishlistItems();
    console.log(this.wishlistItems)  
  }

  redeemReward(item: WishlistItem): void {
      // console.log(`Redeeming: ${item.title} for ${item.points} points`);
      item.gift = true; // Mark as redeemed
    }
}
