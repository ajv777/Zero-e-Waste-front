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
import { RegistroComponent } from './usuarios-registrados/registro/registro.component';
import { LoginComponent } from './usuarios-registrados/login/login.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditProfileComponent } from './usuarios-registrados/edit-profile/edit-profile.component';
import { NavComponent } from './nav/nav.component';
import { MisProductosComponent } from './usuarios-registrados/mis-productos/mis-productos.component';
import { EditItemsComponent } from './usuarios-registrados/edit-items/edit-items.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';

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
    MisProductosComponent,
    EditItemsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANsKZFN4hNNIWHsVwaYFTDtRRRyPgShYU'
    })
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
