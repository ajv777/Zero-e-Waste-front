import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private userService: UsersService) {
    this.formLogin = new FormGroup ({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
   }

  ngOnInit(): void {
  }

  // Me devuelve success y el token - podemos guardar el token en localStorage (las request irán viajando con su token para pasar los middlewares). Así podremos saber quién se ha logado (porque trae el id del usuario en la base de datos). Guardo el token en LocalStorage

  async onSubmit(){
    // Meter el método que sea (login) desde el userService
    const response = await this.userService.login(this.formLogin.value);
    console.log (response);
    if (response['success']) {
      const token = response['token'];
      localStorage.setItem('userToken', token);
    }
    // Redirigir al usuario a home
  }

}
