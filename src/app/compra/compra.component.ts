import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  arrItems: Item[];
  
  constructor (private itemsService: ItemsService,
    private router: Router) {

  }
  
  async ngOnInit() {
    const response = await this.itemsService.allItems();
    console.log (response);
    if (response ['error']) {
      this.router.navigate(['/comprar']);
    } else {
      this.arrItems = response;
    }
  }

  }
  
  /* onClick() { */
    // Al hacer click en el div enter, se abre el detalle de cada producto
    // Inyectar servicio que recupera de la bd y pasarle el método que recupera productos por idItem
   /*  this.activatedRoute.params.subscribe(async params => {
    this.arrItems = await this.detalleProducto.getById(parseInt(params.idItem));
    }) */
  