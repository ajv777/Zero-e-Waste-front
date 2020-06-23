import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickLogOut() {
    Swal.fire({
      title: '¿Seguro que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#81C14B',
      cancelButtonColor: '#F49F0A',
      confirmButtonText: 'Sí',
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('isLogged');
        Swal.fire(
          'Sesión cerrada correctamente',
          '¡Esperamos que vuelvas pronto!',
          'success'
        );
        this.router.navigate(['/login']);
      }
    });
  }
}
