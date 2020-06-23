import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  user: any;
  item: any;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // No works - falta meter una query para recuperar los datos de ambas tablas
    // const response = await this.usersService.allUsers();
    // console.log(response);

    this.activatedRoute.params.subscribe(async (params) => {
      /* console.log (params.idItem) */
      const id = params.idItem;
      const response = await this.itemsService.itemById(id);
      /* console.log (response); */
      if (response['error']) {
        this.router.navigate(['/comprar']);
      } else {
        this.item = response;
      }
      console.log(this.item);
    });
    this.user.Id_User = this.item.Users_Id_User;
    console.log('user id', this.user.Id_User);
  }
}
