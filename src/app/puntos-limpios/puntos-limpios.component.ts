import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core'
import { HttpClient } from '@angular/common/http'
import { PuntosLimpiosService } from '../servicios/puntos-limpios.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-puntos-limpios',
  templateUrl: './puntos-limpios.component.html',
  styleUrls: ['./puntos-limpios.component.css'],
})

export class PuntosLimpiosComponent implements OnInit {
  lat: Number
  lng: Number
  arrCoords: any[]

  constructor(private router: Router, private puntosLimpiosService: PuntosLimpiosService) {
    this.arrCoords = []
  }
    
  async ngOnInit() {
    this.arrCoords = await this.puntosLimpiosService.allEpoints()


    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
    })

    
    
  }

  async loadEpoints(){

  }

}
