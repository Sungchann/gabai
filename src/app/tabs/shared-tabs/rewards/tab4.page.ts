import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WishlistService, WishlistItem, WishlistVoucher } from 'src/app/services/wishlist/wishlist.service';
import { WishlistFormComponent } from 'src/app/shared/component/wishlist-form/wishlist-form.component';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiperContainer', { read: ElementRef }) swiperContainer!: ElementRef;
  
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
  activeIndex: number = 0;
  showWishlistDialog: boolean = false;
  showFlashMessage: boolean = false;
  isDialogClosing: boolean = false;
  isFlashClosing: boolean = false;
  
  private swiper: Swiper | undefined;
  private clickStartTime: number = 0;

  constructor(
    private wishlistService: WishlistService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.wishlistItems = this.wishlistService.getWishlistItems();
    this.wishlistVouchers = this.wishlistService.getWishlistVouchers();
  }

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  initializeSwiper() {
    if (this.swiperContainer) {
      this.swiper = new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        on: {
          slideChange: () => {
            if (this.swiper) {
              this.activeIndex = this.swiper.activeIndex;
            }
          },
          touchStart: () => {
            this.clickStartTime = Date.now();
          },
          touchEnd: () => {
            const touchDuration = Date.now() - this.clickStartTime;
            if (touchDuration > 200) {
              setTimeout(() => {
                this.clickStartTime = 0;
              }, 50);
            }
          }
        }
      });
    }
  }

  selectedReward: any = this.rewards[0];
  selectedRewardTag: string = 'all';

  selectReward(reward: any) {
    this.selectedReward = reward;
    this.selectedRewardTag = reward.tag;
  }

  async openWishlistForm(voucher: WishlistVoucher) {
    this.showWishlistDialog = true;
  }

  closeWishlistDialog() {
    this.isDialogClosing = true;
    
    setTimeout(() => {
      this.showWishlistDialog = false;
      this.isDialogClosing = false;
    }, 300);
  }

  onDialogBackdropClick(event: Event) {
    if (this.isDialogClosing) return;
    
    if (event.target === event.currentTarget) {
      this.closeWishlistDialog();
    }
  }

  onFormSubmit() {
    console.log('Wishlist form submitted');
    
    this.closeWishlistDialog();
    
    setTimeout(() => {
      this.showFlashMessage = true;
      
      setTimeout(() => {
        this.hideFlashMessage();
      }, 3000);
    }, 150);
  }

  hideFlashMessage() {
    this.isFlashClosing = true;
    
    setTimeout(() => {
      this.showFlashMessage = false;
      this.isFlashClosing = false;
    }, 300);
  }

  onVoucherClick(voucher: WishlistVoucher) {
    if (this.clickStartTime === 0 || Date.now() - this.clickStartTime < 200) {
      this.openWishlistForm(voucher);
    }
  }
}
