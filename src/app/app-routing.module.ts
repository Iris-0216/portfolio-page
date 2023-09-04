import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoadingComponent } from './loading/loading.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: LoadingComponent, data: { animation: 'Loading' } },
  { path: 'top', component: TopComponent, data: { animation: 'Top' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' },
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { animation: 'About-me' },
  },
  {
    path: 'works',
    component: WorksComponent,
    data: { animation: 'Works' },
    loadChildren: () =>
      import('./works/works.module').then((m) => m.WorksModule),
  },
];

@NgModule({
  imports: [
    // reset scroll position(to Top) when changing route
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
