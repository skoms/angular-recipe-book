import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.sass'],
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
