import { Injectable } from '@angular/core';

export interface WishlistItem {
  id: string;
  name: string;
  kid: string;
  emoji: string;
  description: string;
  color: string;
  border: string;
  gift?: boolean;
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
      kid: "Jamal Usjr",
      emoji: '🎧',
      color: '#9956DE',
      border: '#6e2baf',
      description: 'Noise-cancelling over-ear headphones'
    },
    {
      id: 'item2',
      name: 'Smart Watch',
      kid: 'Leeroy Usjr',
      emoji: '⌚',
      color: '#1FA7E1',
      border: '#1083b4',
      description: 'Fitness tracking and notifications'
    },
    {
      id: 'item3',
      name: 'Phone',
      kid: 'Amiel Usjr',
      emoji: '📱',
      color: '#2cafae',
      border: '#1b807d',
      description: 'Fitness tracking and notifications'
    },
    {
      id: 'item4',
      name: 'Race Car',
      kid: 'Johnane Usjr',
      emoji: '🏎️',
      color: '#75D06A',
      border: '#38ac3f',
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
