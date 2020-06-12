import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup;
  currentDate: Date;
      // Inyectar el servicio para llamar al método de crear usuarios
  constructor (private router: Router) {
    this.currentDate = new Date ();
    this.formRegister = new FormGroup ({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      pc: new FormControl('', [
        Validators.required
      ]),
      localidad: new FormControl('', [
        Validators.required
      ]),
      province: new FormControl('', [
        Validators.required
      ]),
      phone_number: new FormControl('', [
        Validators.required
      ]),
      whatsapp: new FormControl(),
      email: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {

    let newUser: User = this.formRegister.value;
    newUser.signup_date = this.currentDate;
    console.log (this.formRegister.value)

    // Llamar al servicio con el método para agregar un nuevo usuario
    // this.nombreDelServicio.agregarItem(newItem)
    // Sweet alert
    Swal.fire(
      '¡Enhorabuena!',
      'Ya eres parte de Zero e-Waste',
      'success'
    )
   // Redirigir con router al /login
  }

}
