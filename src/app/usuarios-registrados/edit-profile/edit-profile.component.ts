import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: any;
  formEdit: FormGroup;
  arrItems: any[];

  constructor(private usersService: UsersService, private router: Router) {}
  // Works
  async ngOnInit() {
    const response = await this.usersService.userById();
    this.user = response[0];
    console.log(this.user);

    this.formEdit = new FormGroup({
      Name: new FormControl(this.user.Name),
      Surname: new FormControl(this.user.Surname),
      Address: new FormControl(this.user.Address),
      PC: new FormControl(this.user.PC),
      Localidad: new FormControl(this.user.Localidad),
      Province: new FormControl(this.user.Province),
      Phone_number: new FormControl(this.user.Phone_number),
      Whatsapp: new FormControl(this.user.Whatsapp),
      Email: new FormControl(this.user.Email),
    });
  }

  // Edit user profile - Works
  onSubmit() {
    this.usersService
      .updateUser(this.formEdit.value)
      .then((response) => {
        if (response.success) {
          Swal.fire(
            '¡Todo ha ido bien!',
            'Tu perfil ha sido actualizado',
            'success'
          );
          this.router.navigate(['/compra']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Delete item - works
  async onClickDelete() {
    Swal.fire({
      title: '¿Seguro que deseas eliminar tu cuenta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#81C14B',
      cancelButtonColor: '#F49F0A',
      confirmButtonText: 'Sí',
    }).then(async (result) => {
      if (result.value) {
        const response = await this.usersService.deleteUser();
        Swal.fire(
          'Esperamos que vuelvas pronto',
          'Esto no será lo mismo sin ti',
          'success'
        );
        this.router.navigate(['/login']);
      }
    });
  }
}
