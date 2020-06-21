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
  }

  // No works
  onSubmit(){
    this.usersService.UpdateUser(this.user)
    .then (response => {
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
    })
  }
}
