import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosModule } from './ejercicios/puntos/puntos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CineModule } from './ejercicios/cine/cine.module';
import { ResisModule } from './ejercicios/resis/resis.module';
import { CrudComponent } from './ejercicios/crud/crud.component';
import { MenuComponent } from './ejercicios/menu/menu.component';
import { AlumnosFilterPipe } from './ejercicios/alumnos-filter.pipe';
import { AlumnoReactiveComponent } from './ejercicios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    MenuComponent,
    AlumnosFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PuntosModule,
    CineModule,
    ResisModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
