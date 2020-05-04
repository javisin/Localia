import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutasComponent } from './frutas.component';

const routes: Routes = [{ path: '', component: FrutasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutasRoutingModule { }
