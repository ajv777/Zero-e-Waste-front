import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Item } from 'src/models/item.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  formProduct: FormGroup;
  currentDate: Date;
      // Inyectar el servicio para llamar al método de crear items
  constructor (private router: Router) {
    this.currentDate = new Date ();
    this.formProduct = new FormGroup ({
      name: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      pic_1: new FormControl(''),
      pic_2: new FormControl(''),
      pic_3: new FormControl(''),
      category: new FormControl('', [
        Validators.required
      ]),
      precio: new FormControl('', [
        Validators.required
      ]),
      post_delivery: new FormControl(''),
      hand_delivery: new FormControl(''),
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    let newItem: Item = this.formProduct.value;
    newItem.register_date = this.currentDate;
    console.log (this.formProduct.value)
    // Llamar al servicio con el método para agregar un nuevo item
    // this.nombreDelServicio.agregarItem(newItem)
    this.router.navigate['/compra']
    Swal.fire(
      '¡Enhorabuena!',
      'Tu producto ya está en venta',
      'success'
    )
  }

}
