import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { recipeImageUrls, smallRecipeImageUrls } from 'src/app/works/consts';

@Component({
  selector: 'app-recipe-intro',
  templateUrl: './recipe-intro.component.html',
  styleUrls: ['./recipe-intro.component.scss'],
})
export class RecipeIntroComponent {
  imageUrls = recipeImageUrls;
  smallImageUrls = smallRecipeImageUrls;

  constructor(private router: Router) {}
  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event.deltaY) {
      delta = event.deltaY;
    }

    if (delta > 0) {
      this.router.navigate(['/works/recipe/video']);
    }
  }

  onSwipeUp() {
    this.router.navigate(['/works/recipe/video']);
  }
}
