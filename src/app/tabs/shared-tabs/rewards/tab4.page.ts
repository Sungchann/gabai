import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WishlistService, WishlistItem, WishlistVoucher } from 'src/app/services/wishlist/wishlist.service';
import { WishlistFormComponent } from 'src/app/shared/component/wishlist-form/wishlist-form.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit, AfterViewInit {
  @ViewChild('carousel', { read: ElementRef }) carousel!: ElementRef;
  
  rewards = [
    { label: 'All Rewards', icon: 'wallet-outline', tag: 'all' },
    { label: 'Family Time', icon: 'people-outline', tag: 'family' },
    { label: 'Recognition', icon: 'star-outline', tag: 'recognition' },
    { label: 'Special Privileges', icon: 'medal-outline', tag: 'privileges' },
    { label: 'My Choice', icon: 'heart-outline', tag: 'choice' },
    { label: 'Connections', icon: 'gift-outline', tag: 'connections' }
  ];
  wishlistItems: WishlistItem[] = [];
  wishlistVouchers: WishlistVoucher[] = [];
  activeIndex: number = 0; // Track active tab index
  showWishlistDialog: boolean = false; // Control dialog visibility
  showFlashMessage: boolean = false; // Control flash message visibility
  isDialogClosing: boolean = false; // Control dialog closing animation
  isFlashClosing: boolean = false; // Control flash message closing animation
  
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private currentX: number = 0;
  private isDragging: boolean = false;
  private hasSwipedSignificantly: boolean = false;

  constructor(
    private wishlistService: WishlistService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.wishlistItems = this.wishlistService.getWishlistItems();
    this.wishlistVouchers = this.wishlistService.getWishlistVouchers();
  }

  ngAfterViewInit() {
    this.setupTouchEvents();
  }

  setupTouchEvents() {
    const carouselElement = this.carousel.nativeElement;
    
    carouselElement.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.currentX = this.touchStartX;
      this.isDragging = true;
      this.hasSwipedSignificantly = false;
      
      // Disable transitions during drag
      const allItems = carouselElement.querySelectorAll('.carousel-item');
      allItems.forEach((item: any) => {
        item.style.transition = 'none';
      });
    });

    carouselElement.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.isDragging) return;
      
      this.currentX = e.changedTouches[0].screenX;
      const deltaX = this.currentX - this.touchStartX;
      
      // Mark as significant swipe if moved more than 10px
      if (Math.abs(deltaX) > 10) {
        this.hasSwipedSignificantly = true;
      }
      
      // Get current active item
      const activeItem = carouselElement.querySelector('.carousel-item.active') as HTMLElement;
      if (activeItem) {
        activeItem.style.transform = `translateX(${deltaX}px)`;
        activeItem.style.opacity = `${Math.max(0.3, 1 - Math.abs(deltaX) / 300)}`;
      }
      
      // Show next item when swiping left
      if (deltaX < -30 && this.activeIndex < this.wishlistVouchers.length - 1) {
        const nextIndex = this.activeIndex + 1;
        const nextItem = carouselElement.children[nextIndex] as HTMLElement;
        if (nextItem) {
          nextItem.style.display = 'block';
          nextItem.style.position = 'absolute';
          nextItem.style.transform = `translateX(${300 + deltaX}px)`;
          nextItem.style.opacity = `${Math.min(1, Math.abs(deltaX) / 150)}`;
        }
      }
      
      // Show previous item when swiping right
      if (deltaX > 30 && this.activeIndex > 0) {
        const prevIndex = this.activeIndex - 1;
        const prevItem = carouselElement.children[prevIndex] as HTMLElement;
        if (prevItem) {
          prevItem.style.display = 'block';
          prevItem.style.position = 'absolute';
          prevItem.style.transform = `translateX(${-300 + deltaX}px)`;
          prevItem.style.opacity = `${Math.min(1, Math.abs(deltaX) / 150)}`;
        }
      }
    });

    carouselElement.addEventListener('touchend', (e: TouchEvent) => {
      if (!this.isDragging) return;
      
      this.touchEndX = e.changedTouches[0].screenX;
      this.isDragging = false;
      
      // Re-enable transitions
      const allItems = carouselElement.querySelectorAll('.carousel-item');
      allItems.forEach((item: any) => {
        item.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      });
      
      // Check if we should navigate
      const shouldNavigate = this.handleSwipe();
      
      if (!shouldNavigate) {
        // Snap back to original position
        this.resetCarouselPositions();
      }
    });
  }

  resetCarouselPositions() {
    const carouselElement = this.carousel.nativeElement;
    const allItems = carouselElement.querySelectorAll('.carousel-item');
    
    allItems.forEach((item: any, index: number) => {
      item.style.transform = 'translateX(0)';
      if (index === this.activeIndex) {
        item.style.display = 'block';
        item.style.position = 'relative';
        item.style.opacity = '1';
        item.classList.add('active');
      } else {
        item.style.display = 'none';
        item.style.position = 'absolute';
        item.style.opacity = '0';
        item.classList.remove('active');
      }
    });
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const difference = this.touchStartX - this.touchEndX;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swiped left - go to next
        this.nextVoucher();
        return true;
      } else {
        // Swiped right - go to previous
        this.prevVoucher();
        return true;
      }
    }
    return false;
  }

  selectedReward: any = this.rewards[0]; // default selected (optional)
  selectedRewardTag: string = 'all';

  selectReward(reward: any) {
    this.selectedReward = reward;
    this.selectedRewardTag = reward.tag;
  }

  prevVoucher() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.resetCarouselPositions();
    }
  }

  nextVoucher() {
    if (this.activeIndex < this.wishlistVouchers.length - 1) {
      this.activeIndex++;
      this.resetCarouselPositions();
    }
  }

  async openWishlistForm(voucher: WishlistVoucher) {
    this.showWishlistDialog = true;
  }

  closeWishlistDialog() {
    // Start closing animation
    this.isDialogClosing = true;
    
    // Hide dialog after animation completes
    setTimeout(() => {
      this.showWishlistDialog = false;
      this.isDialogClosing = false;
    }, 300); // Match animation duration
  }

  onDialogBackdropClick(event: Event) {
    // Don't close dialog if it's already closing or if clicking during animation
    if (this.isDialogClosing) return;
    
    // Close dialog when clicking backdrop
    if (event.target === event.currentTarget) {
      this.closeWishlistDialog();
    }
  }

  onFormSubmit() {
    console.log('Wishlist form submitted');
    
    // Close dialog with animation
    this.closeWishlistDialog();
    
    // Show flash message after dialog starts closing
    setTimeout(() => {
      this.showFlashMessage = true;
      
      // Auto-hide flash message after 3 seconds
      setTimeout(() => {
        this.hideFlashMessage();
      }, 3000);
    }, 150); // Small delay so dialog starts closing first
  }

  hideFlashMessage() {
    this.isFlashClosing = true;
    
    setTimeout(() => {
      this.showFlashMessage = false;
      this.isFlashClosing = false;
    }, 300); // Match animation duration
  }

  onVoucherClick(voucher: WishlistVoucher) {
    // Only open modal if user didn't swipe
    if (!this.hasSwipedSignificantly) {
      this.openWishlistForm(voucher);
    }
    // Reset swipe flag for next interaction
    this.hasSwipedSignificantly = false;
  }
}
