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
  