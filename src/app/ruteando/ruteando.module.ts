import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { JankenponComponent } from '../componentes/jankenpon/jankenpon.component';
import { SimonComponent } from '../componentes/simon/simon.component';
import { TaTeTiComponent } from '../componentes/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from '../componentes/memotest/memotest.component';
import { LoginGuardGuard } from '../guards/login-guard.guard';
import { NavegaGuardGuard } from '../guards/navega-guard.guard';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';


// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent, canActivate: [NavegaGuardGuard]},
{path: '' , component: PrincipalComponent, canActivate: [NavegaGuardGuard]},
{path: 'Login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent, canActivate: [NavegaGuardGuard]},
{path: 'QuienSoy' , component: QuienSoyComponent, canActivate: [NavegaGuardGuard]},
{path: 'Registro' , component: RegistroComponent, canActivate: [NavegaGuardGuard]},
{path: 'Principal' , component: PrincipalComponent, canActivate: [NavegaGuardGuard]},
{path: 'Listado' , component: ListadoComponent, canActivate: [NavegaGuardGuard]},
{path: 'Paises' , component: ListadoDePaisesComponent, canActivate: [NavegaGuardGuard]},

{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'Jankenpon', component:JankenponComponent},
      {path: 'Simon', component:SimonComponent},
      {path: 'Tateti', component:TaTeTiComponent},
      {path: 'Memotest', component:MemotestComponent},
      {path: 'Anagrama', component:AnagramaComponent}
      ]
, canActivate: [NavegaGuardGuard]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
