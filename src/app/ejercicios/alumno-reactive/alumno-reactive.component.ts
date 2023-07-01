import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!:FormGroup

  constructor(private readonly fb: FormBuilder){
    this.alumnoForm = this.initForm()
  }
  onSubmit():void{
    //console.log('Form->', this.alumnoForm.value)
    this.obtenerValores();

  }
  obtenerValores():void{
    const mat = this.alumnoForm.get('matricula')?.value 
    const no = this.alumnoForm.get('nombre')?.value
    const ed = this.alumnoForm.get('edad')?.value 
    const cor = this.alumnoForm.get('correo')?.value 
    const pag = this.alumnoForm.get('pago')?.value 
    const fot = this.alumnoForm.get('foto')?.value
    const cal = this.alumnoForm.get('calif')?.value
    console.log('Matricula:', mat, no, ed, cor, pag, fot, cal);
        
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['',  Validators.required],
      nombre:['', Validators.required, Validators.minLength(3)],
      edad:['' ],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:['']
    })
  }

}
