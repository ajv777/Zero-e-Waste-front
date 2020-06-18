import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { PuntosLimpiosComponent } from './puntos-limpios/puntos-limpios.component';
import { LoginComponent } from './Usuario/login/login.component';
import { RegistroComponent } from './Usuario/registro/registro.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditProfileComponent } from './Usuario/edit-profile/edit-profile.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: EditProfileComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'compra/:idItem', component: DetalleProductoComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'puntoslimpios', component: PuntosLimpiosComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
