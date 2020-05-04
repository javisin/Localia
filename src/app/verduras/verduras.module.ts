import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerdurasRoutingModule } from './verduras-routing.module';
import { VerdurasComponent } from './verduras.component';


@NgModule({
  declarations: [VerdurasComponent],
  imports: [
    CommonModule,
    VerdurasRoutingModule
  ]
})
export class VerdurasModule { }
