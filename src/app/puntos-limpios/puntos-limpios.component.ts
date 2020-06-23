import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-puntos-limpios',
  templateUrl: './puntos-limpios.component.html',
  styleUrls: ['./puntos-limpios.component.css'],
})
export class PuntosLimpiosComponent implements OnInit {
  constructor(private http: HttpClient) {
   
  }

  ngOnInit(): void {}
}
