import { Injectable } from '@angular/core';

interface Category {
  name: string;
  emoji: string;
  color: string;
  border: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [
    { name: 'Drawing', emoji: '🎨', color: '#9956DE', border: '#6e2baf' },     
    { name: 'Storytelling', emoji: '📖', color: '#1FA7E1', border: '#1083b4' },  
    { name: 'Singing', emoji: '🎵', color: '#2cafae', border: '#1b807d' },      
    { name: 'Dancing', emoji: '💃', color: '#75D06A', border: '#38ac3f' },      
    { name: 'Cooking', emoji: '👩‍🍳', color: '#FFB356', border: '#df832d' },    
    { name: 'Helping others', emoji: '🤝', color: '#FF8B8B', border: '#dc6969' } 
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }
}
