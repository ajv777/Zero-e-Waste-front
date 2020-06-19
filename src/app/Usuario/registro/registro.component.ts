import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup;
  currentDate: Date;

  constructor (
    private router: Router, 
    private usersService: UsersService
    ) {
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
      password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
    
  }

// Works 

onSubmit(){
  this.usersService.registro(this.formRegister.value)
  .then (response => {
    console.log (response);
    if (response.success) {
      Swal.fire(
        '¡Enhorabuena!',
        'Ya eres parte de Zero e-Waste',
        'success'
      )
      this.router.navigate(['/login']);
    }
  }) 
  .catch (err => {
    console.log (err);
  })
}

}


