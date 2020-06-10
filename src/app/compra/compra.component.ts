import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  detalleProducto: any;
  
  constructor (private activatedRoute: ActivatedRoute) {

  }
  
  ngOnInit(): void {

  }
  
  onClick() {
    // Al hacer click en el div enter, se abre el detalle de cada producto
    // Inyectar servicio que recupera de la bd y pasarle el método que recupera productos por idItem
    console.log ('estoy en click')
   /*  this.activatedRoute.params.subscribe(async params => {
    this.detalleProducto = await this.detalleProducto.getById(parseInt(params.idItem));
    }) */
  }

}
