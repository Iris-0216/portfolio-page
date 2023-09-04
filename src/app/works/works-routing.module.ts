import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InProgressComponent } from './in-progress/in-progress.component';
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  {
    path: '',
    component: DoneComponent,
    data: { animation: 'Done' },
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./done/recipe/recipe.module').then((m) => m.RecipeModule),
    data: { animation: 'PjIntro' },
  },
  {
    path: 'moment',
    loadChildren: () =>
      import('./done/moment/moment.module').then((m) => m.MomentModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./done/shop/shop.module').then((m) => m.ShopModule),
  },
  { path: 'in-progress', component: InProgressComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
