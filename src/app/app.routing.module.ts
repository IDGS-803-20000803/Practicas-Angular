import { RouterModule,Routes } from "@angular/router";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CrudComponent } from "./ejercicios/crud/crud.component";
import { ResistenciaComponent } from "./ejercicios/resistencia/resistencia.component";
import { DistanciaPuntosComponent } from "./ejercicios/distancia-puntos/distancia-puntos.component";
import { CinepolisComponent } from "./ejercicios/cinepolis/cinepolis.component";
import { PizzeriaComponent } from "./ejercicios/pizzeria/pizzeria.component";

const routes:Routes=[
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'Distancia', component:DistanciaPuntosComponent},
    {path: 'Resistencia', component:ResistenciaComponent},
    {path: 'Cine', component:CinepolisComponent},
    {path: 'Pizza', component:PizzeriaComponent}

    //{path:'**', component: PageFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}