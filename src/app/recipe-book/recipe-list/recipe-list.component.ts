import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  @Output('recipeSelect') selectRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.funfoodfrolic.com/wp-content/uploads/2014/01/Paneer_Pasanda_Recipe4.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://www.funfoodfrolic.com/wp-content/uploads/2014/01/Paneer_Pasanda_Recipe4.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.recipes.length > 0) {
      this.selectRecipeEvent.emit(this.recipes[0]);
    }
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipeEvent.emit(recipe);
  }
}
