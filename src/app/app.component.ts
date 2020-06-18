import { Component } from '@angular/core';
import { UsersService } from './servicios/users.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Recupera el usuario por id para editar sus datos
    user: any;
    
    // Va aquí o en edit profile
    constructor (
      private usersService: UsersService,
      private router: Router,
      private activatedRoute: ActivatedRoute) 
      { }
    
    // NO Works
    ngOnInit() {
      this.activatedRoute.params.subscribe (
        async params => {
          /* console.log (params.usersId) */
          const id = params.usersId;
          const response = await this.usersService.UserById(id);
          /* console.log (response); */
            if (response ['error']) {
              console.error(response);
              this.router.navigate(['/comprar']);
            } else {
              this.user = response;
            } 
        /*   console.log (this.user) */
        }) 
    }
}
