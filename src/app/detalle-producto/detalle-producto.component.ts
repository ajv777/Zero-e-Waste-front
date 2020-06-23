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

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // Works
  ngOnInit() {
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
  }
}
