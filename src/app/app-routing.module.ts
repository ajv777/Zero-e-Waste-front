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
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'perfil',
    component: EditProfileComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'productos',
    component: MisProductosComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'productos/:idItem',
    component: EditItemsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'compra', component: CompraComponent, canActivate: [LoginGuard] },
  {
    path: 'compra/:idItem',
    component: DetalleProductoComponent,
    canActivate: [LoginGuard],
  },
  { path: 'venta', component: VentaComponent, canActivate: [LoginGuard] },
  {
    path: 'puntoslimpios',
    component: PuntosLimpiosComponent,
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
