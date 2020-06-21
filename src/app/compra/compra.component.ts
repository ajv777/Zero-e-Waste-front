import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import * as moment from 'moment';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  arrItems: any[];
  arrItemsFix: any[];
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
    if (response['error']) {
      this.router.navigate(['/comprar']);
    } else {
      this.arrItems = response;
      this.arrItemsFix = response;
    }
  }

  // Works 
  onClickCategory($event) {
    // id category
    // console.log ($event.target.value)
/*       const response = await this.itemsService.ItemsByCategory($event.target.value);
      if (response ['error']) {
        this.router.navigate(['/comprar']);
      } else {
        this.arrItems = response;
      }  */
      console.log('array fix', this.arrItemsFix)

      this.arrItems = []
      this.arrItems = this.arrItemsFix.filter((item) => 
    item.Category_idCategory.toString() === $event.target.value
      
      ) 

      console.log('array', this.arrItems)
  } 
  
  // Order by category and price ASC - in process
  onClickPriceAsc () {
    this.arrItems = this.arrItems.sort((a,b)=> {
      if (a.Precio > b.Precio) {
        return 1;
      }
      if (a.Precio < b.Precio) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

  // Order by category and price DESC - in process
  onClickPriceDesc () {
    this.arrItems = this.arrItems.sort((a,b)=> {
      if (a.Precio < b.Precio) {
        return 1;
      }
      if (a.Precio > b.Precio) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }
  // Order by category and date - in process - transform 
  onClickDate () {
    this.arrItems = this.arrItems.sort((a,b)=> {
      const dateA = moment(a.Register_date).unix()
      const dateB = moment(b.Register_date).unix()
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }
} 
  