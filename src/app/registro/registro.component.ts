import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      nickname: new FormControl,
      password: new FormControl,
      email: new FormControl,
      name: new FormControl,
      surname: new FormControl
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    /* TERMINAR cuando sepamos almacenar datos */
  }

}
