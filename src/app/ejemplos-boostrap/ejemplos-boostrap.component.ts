import { Component, OnInit } from '@angular/core';

class Alumno {
  nombre: string;
  apellido: string;
  excelencia: string;
  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.excelencia ="";
  }
}

@Component({
  selector: 'app-ejemplos-boostrap',
  templateUrl: './ejemplos-boostrap.component.html',
  styleUrls: ['./ejemplos-boostrap.component.scss']
})
export class EjemplosBoostrapComponent implements OnInit {
  alumno: Alumno = new Alumno();
  alumnosList: Array<Alumno> = new Array<Alumno>(); 
  constructor() { }

  ngOnInit(): void {
  }
  addAlumno(){
    this.alumnosList.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      excelencia: this.alumno.excelencia
    })
    this.alumno.nombre = '';
    this.alumno.apellido = '';
    this.alumno.excelencia = '';

    console.log(this.alumnosList)
  }

}
