import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PizzeriaComponent } from '../pizzeria/pizzeria.component';


@NgModule({
  declarations: [
    PizzeriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports:
  [
    PizzeriaComponent
  ]
})
export class PizzaModule { }
