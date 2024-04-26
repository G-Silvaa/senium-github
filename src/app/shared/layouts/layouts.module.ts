import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet
    ],
  exports: [
    CommonLayoutComponent
  ]
})
export class LayoutsModule { }
