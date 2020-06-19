import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  arrItems: Item[];
  pNombre : any;
  
  constructor (
    private itemsService: ItemsService,
    private router: Router,
    ) 
  {}
  
  // Works
  async ngOnInit() {
    const response = await this.itemsService.allItems();
/*     console.log (response); */
    if (response ['error']) {
      this.router.navigate(['/comprar']);
    } else {
      this.arrItems = response;
    }
  }

  // Works 
  async onClickCatery($event) {
    // id category
    // console.log ($event.target.value)
      const response = await this.itemsService.ItemsByCategory($event.target.value);
          if (response ['error']) {
            this.router.navigate(['/comprar']);
          } else {
            this.arrItems = response;
          } 
  } 
  
  // Order by category and price ASC - in process
  async onClickPriceAsc (pNombre) {
   /*  console.log ('I`m here') */
   pNombre= 3
   const response = await this.itemsService.ItemsByPriceAsc(pNombre)
   console.log (response)
   if (response ['error']) {
     console.log (response)
    this.router.navigate(['/comprar']);
  } else {
    this.arrItems = response;
  }
  }

  // Order by category and price DESC - in process
  async onClickPriceDesc (pNombre) {
   /*  console.log ('I`m here') */
   pNombre=3
   const response = await this.itemsService.ItemsByPriceDesc(pNombre)
   console.log (response)
   if (response ['error']) {
     console.log (response)
    this.router.navigate(['/comprar']);
  } else {
    this.arrItems = response;
  }
  }
  // Order by category and date - in process
  async onClickDate (pNombre) {
   /*  console.log ('I`m here') */
   pNombre=3
   const response = await this.itemsService.ItemsByDate(pNombre)
   console.log (response)
   if (response ['error']) {
     console.log (response)
    this.router.navigate(['/comprar']);
  } else {
    this.arrItems = response;
  }
  }
} 
  