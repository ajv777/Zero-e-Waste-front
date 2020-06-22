import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  item: any;
  formEdit: FormGroup;
  arrCategories: any[];

  constructor (
    private itemsService: ItemsService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) 
    { this.arrCategories = [];
      this.cargarCategorias();}

  ngOnInit() {
    this.activatedRoute.params.subscribe (
      async params => {
        const id = params.idItem;
        const response = await this.itemsService.ItemById(id);
          if (response ['error']) {
            this.router.navigate(['/comprar']);
          } else {
            this.item = response;
          } 
          // console.log (this.item)
          this.formEdit = new FormGroup ({
            Name: new FormControl(this.item.Name),
            Precio: new FormControl(this.item.Precio),
            Description: new FormControl(this.item.Description),
            Pic_1: new FormControl(this.item.Pic_1),
            Pic_2: new FormControl(this.item.Pic_2),
            Pic_3: new FormControl(this.item.Pic_3),
            Category_idCategory: new FormControl(this.item.Category_idCategory),
            Post_delivery: new FormControl(this.item.Post_delivery),
            Hand_delivery: new FormControl(this.item.Hand_delivery),
          })
        }) 
  } 

onSubmit(){
    this.itemsService.UpdateById(this.item.idItem, this.formEdit.value)
    console.log (this.formEdit.value)
  } 

  async cargarCategorias() {
    this.arrCategories = await this.itemsService.getCategories();
  }
}