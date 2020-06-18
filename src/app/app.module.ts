import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Insert ItemsServe to upload images
import { ItemsService } from './servicios/items.service';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { PuntosLimpiosComponent } from './puntos-limpios/puntos-limpios.component';
import { RegistroComponent } from './Usuario/registro/registro.component';
import { LoginComponent } from './Usuario/login/login.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditProfileComponent } from './Usuario/edit-profile/edit-profile.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompraComponent,
    VentaComponent,
    PuntosLimpiosComponent,
    RegistroComponent,
    LoginComponent,
    DetalleProductoComponent,
    EditProfileComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
