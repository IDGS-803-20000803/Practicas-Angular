import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciaPuntosComponent } from '../distancia-puntos/distancia-puntos.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    DistanciaPuntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:
  [
    DistanciaPuntosComponent
  ]
})
export class PuntosModule { }
