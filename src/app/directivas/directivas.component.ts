import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
  //Variables
  tabdirectivas: string = ''
  loading: boolean = true
  namelist: Array<string> = ["Antonio", "Sara", "Nacho"]
  tabbtn: string = ''
  showsquare: boolean = false

  personlist: Array<Person> = [
    {
      name: "Antonio",
      lastname: "Sanz"
    },
    {
      name: "Nacho",
      lastname: "Sanz"
    },
    {
      name: "Sara",
      lastname: "Sanchez"
    }]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = !this.loading
    }, 5000);
  }

  showLoading() {
    this.loading = !this.loading
    setTimeout(() => {
      this.loading = !this.loading
    }, 5000);
  }

  changeTab(tab: string) {
    this.tabbtn = tab;
  }
  changeSquareVisibility() {
    this.showsquare = !this.showsquare
  }
  changeDirectiva(tab: string){
    this.tabdirectivas = tab
  }
}
