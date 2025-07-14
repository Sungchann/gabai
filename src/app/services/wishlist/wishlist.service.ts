import { Injectable } from '@angular/core';

export interface WishlistItem {
  id: string;
  name: string;
  description: string;
}

export interface WishlistVoucher {
  id: string;
  message: string;
  expiryDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistItems: WishlistItem[] = [
    {
      id: 'item1',
      name: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones'
    },
    {
      id: 'item2',
      name: 'Smart Watch',
      description: 'Fitness tracking and notifications'
    }
  ];

  wishlistVouchers: WishlistVoucher[] = [
    {
      id: 'voucher1',
      message: 'Grab a free wishlist!',
      expiryDate: new Date('2024-12-31')
    },
    {
      id: 'voucher2',
      message: 'You have reached 200 points! Add to your wishlist!',
      expiryDate: new Date('2024-11-30')
    }
  ];

  constructor() { }

  getWishlistItems(): WishlistItem[] {
    return this.wishlistItems;
  }

  getWishlistVouchers(): WishlistVoucher[] {
    return this.wishlistVouchers;
  }
}
