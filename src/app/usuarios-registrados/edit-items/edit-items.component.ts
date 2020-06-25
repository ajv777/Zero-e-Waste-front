import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/servicios/items.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css'],
})
export class EditItemsComponent implements OnInit {
  item: any;
  formEdit: FormGroup;
  arrCategories: any[];
  files = {};

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrCategories = [];
    this.cargarCategorias();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params.idItem;
      const response = await this.itemsService.itemById(id);
      // works console.log(response);
      if (response['error']) {
        this.router.navigate(['/comprar']);
      } else {
        this.item = response;
      }
      console.log(this.item);
      this.formEdit = new FormGroup({
        NameItem: new FormControl(this.item.NameItem),
        Precio: new FormControl(this.item.Precio),
        Description: new FormControl(this.item.Description),
        Pic_1: new FormControl(this.item.Pic_1),
        Pic_2: new FormControl(this.item.Pic_2),
        Pic_3: new FormControl(this.item.Pic_3),
        Category_idCategory: new FormControl(this.item.Category_idCategory),
      });
    });
  }
  /* Upload images */
  onFileChange(event, fieldName) {
    let file = event.target.files.item(0);
    this.files[fieldName] = file;
    console.log(this.files);
  }

  onSubmit() {
    let formData = new FormData();
    let values = this.formEdit.value;

    for (let key in values) {
      formData.append(key, values[key]);
    }

    for (let key in this.files) {
      formData.append(key, this.files[key]);
    }

    this.itemsService
      .updateItemById(this.item.idItem, this.formEdit.value)
      .then((response) => {
        if (response.success) {
          Swal.fire(
            '¡Todo ha ido bien!',
            'Tu producto ha sido actualizado',
            'success'
          );
          this.router.navigate(['/productos']);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async cargarCategorias() {
    this.arrCategories = await this.itemsService.getCategories();
  }
}
