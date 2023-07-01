import { Component } from '@angular/core';
import { IAlumnos } from '../alumnos';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  muestraImagen:boolean=true;
  listFilter:string='';
  imagenMargin:number=2;
  wihtImagen:number=80;
  // alumnos:any[] = []

showImagen():void{
  this.muestraImagen =! this.muestraImagen
}
alumnos: IAlumnos[] = [
  {
    "matriucula": 1234,
    "nombre": "Mario",
    "edad": 23,
    "correo": "mario@gmail.com",
    "pago": 129.42,
    "foto": "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg",
    "calif":8
  },
  {
    "matriucula": 2002,
    "nombre": "Dario",
    "edad": 24,
    "correo": "dario@gmail.com",
    "pago": 342.5,
    "foto": "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    "calif":8
  },
  {
    "matriucula": 5532,
    "nombre": "Alejandro",
    "edad": 20,
    "correo": "ale@gmail.com",
    "pago": 453.5,
    "foto": "https://m8p8m9h3.stackpathcdn.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg",
    "calif":8
}
]
}
