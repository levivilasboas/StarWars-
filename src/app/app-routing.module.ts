import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  },
  {
    path: 'peoples',
    loadChildren: () => import('./peoples/peoples.module').then( m => m.PeoplesPageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then( m => m.SpeciesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
