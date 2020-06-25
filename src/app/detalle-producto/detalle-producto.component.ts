import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servicios/items.service';
import * as moment from 'moment';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  item: any;
  user: any;
  lat: Number;
  lng: Number;
  color: string;
  stroke: string;
  strokeWeight: number;
  opacity: Number;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params.idItem;
      const response = await this.itemsService.itemAndUser(id);
      if (response['error']) {
        this.router.navigate(['/comprar']);
      } else {
        this.item = response[0];
        this.item.Register_date = moment(this.item.Register_date).format('ll');

        console.log(this.item);
      }
    });
    const response = await this.usersService.userById();
    this.user = response[0];

    this.lat = this.user.Latitude;
    this.lng = this.user.Longitude;

    this.color = '#ffffff';
    this.opacity = 0.25;
    this.stroke = '#81c14b';
    this.strokeWeight = 1;
  }
}
