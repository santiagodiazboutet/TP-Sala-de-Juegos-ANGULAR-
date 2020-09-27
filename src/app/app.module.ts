import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//imports para que funcione Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {firebaseConfig} from '../environments/environment';
// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';
//cosas para primeNG
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';  //para menu superior
import {MenubarModule} from 'primeng/menubar';
import { InputNumberModule} from 'primeng/inputnumber';
import {TreeTableModule} from 'primeng/treetable';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TreeNode} from 'primeng/api';
//servicios importados
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PaisesService } from './servicios/paises.service';

import { JugadoresService } from './servicios/jugadores.service';
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service';
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { JankenponComponent } from './componentes/jankenpon/jankenpon.component';
import { SimonComponent } from './componentes/simon/simon.component';
import { TaTeTiComponent } from './componentes/ta-te-ti/ta-te-ti.component';
import {CardModule} from 'primeng/card';
import { CuadradosComponent } from './componentes/ta-te-ti/cuadrados/cuadrados.component';
import { TableroComponent } from './componentes/ta-te-ti/tablero/tablero.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { TableroMemoComponent } from './componentes/memotest/tablero-memo/tablero-memo.component';
import { CuadradosMemoComponent } from './componentes/memotest/cuadrados-memo/cuadrados-memo.component';
import { FirebaseService } from './servicios/firebase.service';
import { LoginService } from './servicios/firebase/login.service';
import { RegistroService } from './servicios/firebase/registro.service';
import { PutgetService } from './servicios/firebase/putget.service';
import { NavegaGuardGuard } from "./guards/navega-guard.guard";
import { LoginGuardGuard } from "./guards/login-guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    JankenponComponent,
    SimonComponent,
    TaTeTiComponent,
    CuadradosComponent,
    TableroComponent,
    MemotestComponent,
    TableroMemoComponent,
    CuadradosMemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATBS5oCpsCJtiVYedr7QsJ5UrnOXuR2dM'
    }),
    //Empiezan imports primeng
    AccordionModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    TabMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    InputNumberModule,
    TreeTableModule,
    SelectButtonModule,
    //imports de firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService,
               MiHttpService,
               PaisesService,
               ArchivosJugadoresService,
               JugadoresService,
               FirebaseService,
               LoginService,
               RegistroService,
               PutgetService,
               LoginGuardGuard,
               NavegaGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
