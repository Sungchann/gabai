import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [CommonModule],
  providers: [CategoriesService]
})
export class CategoryComponent  implements OnInit {
  categories: { name: string, emoji: string, color: string, border: string }[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    // Fetch the categories with emojis and colors
    this.categories = this.categoriesService.getCategories();
  }
}
