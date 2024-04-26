import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { InitialPageRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    InitialPageRoutingModule
  ]
})
export class InitialPageModule { }
