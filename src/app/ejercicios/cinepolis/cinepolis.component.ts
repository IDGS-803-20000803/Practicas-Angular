import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  Nombre: string = '';
  CantidadC: number = 0;
  Tarjeta: string = '';
  CantidadEnt: number = 0;
  Total: string = '';

  calcularDescuentos(): string {
    const boletas = this.CantidadEnt;
    const tarCineco = this.Tarjeta;
    const nCompradores = this.CantidadC;
    const precio = 12;
    let total = precio * boletas;
    const cantMaxBol = nCompradores * 7;
    let t = 0;
    console.log("Opcion Tarjeta"+tarCineco)
    if (cantMaxBol < boletas) {
      this.Total = 'Lo maximo son 7 entradas Por Persona';
      return this.Total;
    } else {
      if (boletas > 5) {
        if (tarCineco === 'S') {
          const pDesc = total - total * 0.15;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.15;
        }
      } else if (boletas === 3 || boletas === 4 || boletas === 5) {
        if (tarCineco === 'S') {
          const pDesc = total - total * 0.1;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.1;
        }
      } else {
        if (tarCineco === 'S') {
          t = total - total * 0.1;
        } else {
          t = total;
        }
      }
    }

    this.Total = this.Nombre + ' pagara: ' + t.toString();
    return this.Total;
  }
}
