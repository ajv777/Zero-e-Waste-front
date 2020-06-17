import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  arrItems: Item[];
  
  constructor (
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) 
  {}
  
  async ngOnInit() {
    const response = await this.itemsService.allItems();
/*     console.log (response); */
    if (response ['error']) {
      this.router.navigate(['/comprar']);
    } else {
      this.arrItems = response;
    }
  }

  async onClickCatery($event) {
    // Me devuelve el id de la categoría
    console.log ($event.target.value)
      const response = await this.itemsService.ItemsByCategory($event.target.value);
        console.log (response)
          if (response ['error']) {
            this.router.navigate(['/comprar']);
          } else {
            this.arrItems = response;
          } 
/*     console.log (this.arrItems) */
  } 
} 
  