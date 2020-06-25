import { Component, OnInit } from '@angular/core';
import { PuntosLimpiosService } from '../servicios/puntos-limpios.service';

@Component({
  selector: 'app-puntos-limpios',
  templateUrl: './puntos-limpios.component.html',
  styleUrls: ['./puntos-limpios.component.css'],
})
export class PuntosLimpiosComponent implements OnInit {
  lat: Number;
  lng: Number;
  arrCoords: any[];

  constructor(private puntosLimpiosService: PuntosLimpiosService) {
    this.arrCoords = [];
  }

  async ngOnInit() {
    this.arrCoords = await this.puntosLimpiosService.allEpoints();

    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  async loadEpoints() {}
}
