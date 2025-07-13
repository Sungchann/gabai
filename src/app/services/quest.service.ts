import { Injectable } from '@angular/core';

export interface Quest {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  points: number;
  completed?: boolean;
  color: string;
  border: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  private quests: Quest[] = [
    {
      id: 'q1',
      title: 'Record a story for lolo/lola',
      description: 'Share your favorite fairy tale or make up your own story!',
      duration: 10,
      points: 50,
      completed: false,
      color: '#9956DE', border: '#6e2baf'
    },
    {
      id: 'q2',
      title: 'Draw your family tree',
      description: 'Create a beautiful artwork showing all your loved ones',
      duration: 20,
      points: 75,
      completed: false,
      color: '#1FA7E1', border: '#1083b4'
    },
    {
      id: 'q3',
      title: 'Teach a family member something new',
      description: 'Share a skill you learned recently with someone you love',
      duration: 15,
      points: 100,
      completed: false,
      color: '#2cafae', border: '#1b807d' 
    },
    {
      id: 'q4',
      title: 'Create a gratitude song',
      description: 'Make up a simple tune about things you\'re thankful for',
      duration: 15,
      points: 60,
      completed: false,
      color: '#75D06A', border: '#38ac3f'
    }
  ];

  constructor() { }

  getAllQuests(): Quest[] {
    return [...this.quests];
  }

  getQuestById(id: string): Quest | undefined {
    return this.quests.find(quest => quest.id === id);
  }

  completeQuest(id: string): void {
    const quest = this.quests.find(q => q.id === id);
    if (quest) {
      quest.completed = true;
    }
  }
}
