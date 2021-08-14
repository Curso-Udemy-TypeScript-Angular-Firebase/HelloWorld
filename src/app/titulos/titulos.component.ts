import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos', //Nombre con el que llamar a nuestro componente
  templateUrl: './titulos.component.html', //Plantilla HTML del componente
  styleUrls: ['./titulos.component.scss'] //Estilo del componente
})
export class TitulosComponent implements OnInit {

  person: any = {
    name: "Antonio",
    lastname: "Sanz Pans"
  }

  urlimage: string = 'https://dino-chrome.com/static/images/dino.jpg'
  txtinput: string = 'Nuevo input'
  email: string = ''
  password: string = ''
  ngModelChangeEj = ''
  constructor() { }

  ngOnInit(): void {
  }

  btnStart() {
    console.log("email: " + this.email)
    console.log("password: " + this.password)
  }

  alert() {
    alert("Doble click!")
  }

  startNgModelChangeEvent() {
    console.log("ngModelChange: " + this.ngModelChangeEj)
  }
  startInputEvent(e: any) {
    console.log(e.target.value)
  }
  startFocusEvent(e: any) {
    e.srcElement.style.background = "red"
  }
  startKeyUpEvent(e: any) {
    console.log("keyup")
  }
  startKeyDownEvent(e: any) {
    console.log("keydown")
  }
  mouseEnterEvent() {
    console.log("mouseEnterEvent")
  }
  mouseLeaveEvent() {
    console.log("mouseLeaveEvent()")
  }
}
