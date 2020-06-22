import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css'],
})
export class MisProductosComponent implements OnInit {
  arrItems: any[];

  constructor(private itemsService: ItemsService, private router: Router) {}

  // All items per user - works
  async ngOnInit() {
    const response = await this.itemsService.itemsByIdUser();
    console.log(response);
    if (response['error']) {
      this.router.navigate(['/productos']);
    } else {
      this.arrItems = response;
    }
  }

  // Delete item by id - works
  async onClickDelete() {
    Swal.fire({
      title: '¿Seguro que desea borrar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#81C14B',
      cancelButtonColor: '#F49F0A',
      confirmButtonText: 'Sí',
    }).then(async (result) => {
      if (result.value) {
        const response = await this.itemsService.deleteById(
          this.arrItems[0].idItem
        );
        Swal.fire(
          'Todo ha ido bien',
          'Producto borrado correctamente',
          'success'
        );
        this.router.navigate(['/compra']);
      }
    });
  }
}
