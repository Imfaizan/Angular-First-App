import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken',
    'chicken description',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    [
      new Ingredient('Meat', 1 ),
      new Ingredient('French Frieds', 20)

    ]),
    new Recipe('Burger',
    'Burger description',
    'https://media.timeout.com/images/103902673/image.jpg',
    [
      new Ingredient('Buns', 1),
      new Ingredient('Meat', 2)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(index:number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients:Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
