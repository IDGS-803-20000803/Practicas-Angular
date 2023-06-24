import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosModule } from './ejercicios/puntos/puntos.module';
import { FormsModule } from '@angular/forms';
import { CineModule } from './ejercicios/cine/cine.module';
import { ResisModule } from './ejercicios/resis/resis.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PuntosModule,
    CineModule,
    ResisModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
