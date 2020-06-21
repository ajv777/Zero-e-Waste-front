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
    { 
    }
  
  // NO Works
  async ngOnInit() {
    const response = await this.usersService.UserById();
    this.user = response[0]
    console.log(this.user)
  }

  onSubmit(){

  }


}
