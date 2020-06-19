import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  // DELETE ALL 
  // INSERT usersService.updateUser
  
  user: any;
  
  constructor (
    private usersService: UsersService,
    private router : Router,
    private activatedRoute: ActivatedRoute) 
    { }
  
  // NO Works
  ngOnInit() {
    this.activatedRoute.params.subscribe (
      async params => {
        console.log (params.usersId)
        const id = params.usersId;
        const response = await this.usersService.UserById(id);
        console.log (response);
          if (response ['error']) {
            console.error(response);
            this.router.navigate(['/comprar']);
          } else {
            this.user = response;
          } 
        console.log (this.user)
      }) 
  }


}
