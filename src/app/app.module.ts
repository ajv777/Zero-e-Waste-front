import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { PuntosLimpiosComponent } from './puntos-limpios/puntos-limpios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompraComponent,
    VentaComponent,
    PuntosLimpiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
