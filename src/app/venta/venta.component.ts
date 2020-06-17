import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  arrCategories:any[];
  formProduct: FormGroup;
  currentDate: Date;
  constructor (
    private router: Router, 
    private itemsService: ItemsService
    ){
    this.arrCategories = [];
    this.cargarCategorias();
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
      category_idCategory: new FormControl('', [
        Validators.required
      ]),
      precio: new FormControl('', [
        Validators.required
      ]),
      post_delivery: new FormControl(''),
      hand_delivery: new FormControl(''),
      users_id_user: new FormControl(1)
    })
  }

  ngOnInit() {
    
  } 

  onSubmit(){
  console.log (this.formProduct.value)
    this.itemsService.UpItem(this.formProduct.value)
    .then (response => {
      console.log (response);
      if (response.success) {
        Swal.fire(
          '¡Enhorabuena!',
          '¡Tu producto ya está en venta!',
          'success'
        )
        this.router.navigate(['/compra']);
      }
    })
    .catch (err => {
      console.log (err);
    })
  }

  async cargarCategorias() {
    this.arrCategories = await this.itemsService.getCategories();
    console.log (this.arrCategories)
  }

}