import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'; 
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
