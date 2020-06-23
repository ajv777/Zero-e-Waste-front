import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
})
export class VentaComponent implements OnInit {
  arrCategories: any[];
  formProduct: FormGroup;
  currentDate: Date;
  files = {};
  /* arrImagenes: any[]; */
  //Upload images - in process
<<<<<<< HEAD
 /*  uploadedFiles: any[]; */
=======
  /*  uploadedFiles: any[]; */
  formData = new FormData();
>>>>>>> featured-editUser

  constructor(private router: Router, private itemsService: ItemsService) {
    /*  this.arrImagenes =  []; */
    this.arrCategories = [];
    this.cargarCategorias();
    this.currentDate = new Date();
    this.formProduct = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pic_1: new FormControl(''),
      pic_2: new FormControl(''),
      pic_3: new FormControl(''),
      category_idCategory: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      post_delivery: new FormControl(''),
      hand_delivery: new FormControl(''),
      users_id_user: new FormControl(''),
    });
  }

  ngOnInit() {}
  /* Upload images */
<<<<<<< HEAD
  onFileChange(event, fieldName) {
    let file = event.target.files.item(0);
    this.files[fieldName] = file
    console.log(this.files)
  } 

  async onSubmit(){
  /* console.log (this.formProduct.value) */
  /* Upload images */
    let formData = new FormData()
  // Call service ItemsService to upload images
    let values = this.formProduct.value
    
    for(let key in values){
      formData.append(key, values[key])
    }

    for(let key in this.files){
      formData.append(key, this.files[key])
    }
  this.itemsService.UpItem(formData)
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
=======
  /*   onFileChange(event) {
    this.uploadedFiles = event.target.files;
    this.arrImagenes.push(this.uploadedFiles[0]);
    console.log(this.arrImagenes);
  } */

  async onSubmit() {
    /* console.log (this.formProduct.value) */
    /* Upload images */

    /*   for (let i = 0; i < this.arrImagenes.length; i++) {
    console.log(this.arrImagenes[i]);
    this.formData.append("imagen", this.arrImagenes[i], this.arrImagenes[i].name);
  }  */
    // Call service ItemsService to upload images
    /*   console.log(JSON.stringify(this.formData))
    await this.itemsService.UploadImage(this.formData); */

    this.itemsService
      .createItem(this.formProduct.value)
      .then((response) => {
        console.log(response);
        if (response.success) {
          Swal.fire(
            '¡Enhorabuena!',
            '¡Tu producto ya está en venta!',
            'success'
          );
          this.router.navigate(['/compra']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
>>>>>>> featured-editUser
  }

  async cargarCategorias() {
    this.arrCategories = await this.itemsService.getCategories();
  }
}
