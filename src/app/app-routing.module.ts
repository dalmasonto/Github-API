import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GithubComponent } from './pages/github/github.component';
import { HomesComponent } from './pages/homes/homes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomesComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'github',
    component: GithubComponent,
    // loadChildren: () => import('./custom-routing/custom-routing.module').then(m => m.CustomRoutingModul.e),
    loadChildren: () => import('./custom-routing/custom-routing.module').then(m => m.CustomRoutingModule),
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
