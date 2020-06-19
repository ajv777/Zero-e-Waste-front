import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  

  constructor(private userService: UsersService, private router: Router) {

    this.formLogin = new FormGroup ({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      id_user: new FormControl('')
    })
   }

  ngOnInit() {

  }

  async onSubmit(){
    const response = await this.userService.login(this.formLogin.value);
    console.log (this.formLogin.value)
    console.log (response)
    if (response['success']) {
      const token = response['token'];
/*       const id_user = response['id_user']; */
      localStorage.setItem('userToken', token);
/*       localStorage.setItem('id_user', JSON.stringify(id_user)); */
      this.router.navigate(['/home']);
    } else {
      Swal.fire(
        '¡Atención!',
        'Error en email y/o contraseña',
        'warning'
      )
    } 
  } 
}
