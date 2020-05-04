import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdurasComponent } from './verduras.component';

const routes: Routes = [{ path: '', component: VerdurasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerdurasRoutingModule { }
