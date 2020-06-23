import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuarios-registrados/login/login.component';
import { RegistroComponent } from './usuarios-registrados/registro/registro.component';
import { EditProfileComponent } from './usuarios-registrados/edit-profile/edit-profile.component';
import { MisProductosComponent } from './usuarios-registrados/mis-productos/mis-productos.component';
import { EditItemsComponent } from './usuarios-registrados/edit-items/edit-items.component';
import { CompraComponent } from './compra/compra.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { VentaComponent } from './venta/venta.component';
import { PuntosLimpiosComponent } from './puntos-limpios/puntos-limpios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: EditProfileComponent },
  { path: 'productos', component: MisProductosComponent },
  { path: 'productos/:idItem', component: EditItemsComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'compra/:idItem', component: DetalleProductoComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'puntoslimpios', component: PuntosLimpiosComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
