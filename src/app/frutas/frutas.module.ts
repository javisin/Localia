import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutasRoutingModule } from './frutas-routing.module';
import { FrutasComponent } from './frutas.component';
import {AppModule} from '../app.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FrutasComponent],
  imports: [
    CommonModule,
    FrutasRoutingModule,
    FontAwesomeModule
  ]
})
export class FrutasModule { }
