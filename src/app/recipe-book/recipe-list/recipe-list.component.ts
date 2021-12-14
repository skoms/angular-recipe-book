import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.funfoodfrolic.com/wp-content/uploads/2014/01/Paneer_Pasanda_Recipe4.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.funfoodfrolic.com/wp-content/uploads/2014/01/Paneer_Pasanda_Recipe4.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
