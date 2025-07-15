import { Injectable } from '@angular/core';

export interface Reminder {
  route: string;
  icon: string;
  background: string;
  title: string;
  message: string;
  emoji: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenerateRemindersService {
  private reminders: Reminder[] = [
    {
      route: "tabs/tab1",
      icon: "sunny-outline",
      background: "rgb(153, 86, 222)",
      title: "You Shine Bright!",
      message: "Your kindness, curiosity, and courage light the way for others. Keep shining and exploring the world with your amazing heart!",
      emoji: "✨"
    },
    {
      route: "tabs/tab2",
      icon: "heart-outline",
      background: "rgb(117, 208, 106)",
      title: "You're Amazing!",
      message: "Every small step you take helps you grow into the wonderful person you're becoming. Keep being kind, curious, and caring!",
      emoji: "💚"
    },
    {
      route: "tabs/tab3",
      icon: "gift-outline",
      background: "rgb(255, 139, 139)",
      title: "You're a Gift to Your Family!",
      message: "Every quest you complete brings joy and love to the people who care about you most. Your talents make the world brighter!",
      emoji: "✨"
    },
    {
      route: "tabs/tab4",
      icon: "star-outline",
      background: "rgb(82, 96, 255)",
      title: "You're Earning Amazing Rewards!",
      message: "Every point you earn represents a moment of growth, kindness, or mindfulness. These rewards are celebrations of the wonderful person you're becoming!",
      emoji: "🌟"
    },
    {
      route: "tabs/tab5",
      icon: "sparkles-outline",
      background: "rgb(242, 192, 86)",
      title: "Beautiful Progress!",
      message: "Your family is building wonderful digital wellness habits together. The children are developing emotional awareness while maintaining healthy screen boundaries. Keep up the amazing parenting!",
      emoji: "🌟"
    }
  ];

  constructor() { }

  getAllReminders(): Reminder[] {
    return this.reminders;
  }

  getRandomReminder(): Reminder {
    const randomIndex = Math.floor(Math.random() * this.reminders.length);
    return this.reminders[randomIndex];
  }

  getReminderOfTheDay(): Reminder {
    // Get a "random" reminder that's consistent for the whole day
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % this.reminders.length;
    return this.reminders[index];
  }
}
