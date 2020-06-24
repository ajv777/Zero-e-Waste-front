import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  item: any;
  user: any;

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
      const response = await this.itemsService.itemAndUser(id);

      if (response['error']) {
        this.router.navigate(['/comprar']);
      } else {
        this.item = response[0];
        console.log(this.item);
      }
    });
  }
}
