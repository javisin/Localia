import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'verduras', loadChildren: () => import('./verduras/verduras.module').then(m => m.VerdurasModule) },
  { path: 'frutas', loadChildren: () => import('./frutas/frutas.module').then(m => m.FrutasModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
