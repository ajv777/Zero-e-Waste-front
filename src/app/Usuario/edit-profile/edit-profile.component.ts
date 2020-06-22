import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  user: any;
  formEdit: FormGroup;
  
  constructor (
    private usersService: UsersService,
    private router : Router
    ){ 
    }
  // Works  
  async ngOnInit() {
    const response = await this.usersService.UserById();
    this.user = response[0]
    console.log(this.user)

    this.formEdit = new FormGroup ({
      Name: new FormControl(this.user.Name),
      Surname: new FormControl(this.user.Surname),
      Address: new FormControl(this.user.Address),
      PC: new FormControl(this.user.PC),
      Localidad: new FormControl(this.user.Localidad),
      Province: new FormControl(this.user.Province),
      Phone_number: new FormControl(this.user.Phone_number),
      Whatsapp: new FormControl(this.user.Whatsapp),
      Email: new FormControl(this.user.Email),
  })
  }

  // Works - alert doesnt work
  onSubmit(){
    this.usersService.UpdateUser(this.formEdit.value)
    console.log (this.formEdit.value)
   /*  .then (response => {
      console.log (response);
      if (response.success) {
        Swal.fire(
          '¡Enhorabuena!',
          'Tu perfil ha sido actualizado',
          'success'
        )
        this.router.navigate(['/compra']);
      }
    }) 
    .catch (err => {
      console.log (err);
    }) */
  }
}
