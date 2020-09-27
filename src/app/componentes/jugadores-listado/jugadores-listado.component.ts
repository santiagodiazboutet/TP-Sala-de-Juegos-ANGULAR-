import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/servicios/firebase.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  options: SelectItem[];
  files: Observable<any>;
  cols: any[];
  value1: string = "Todos";
  value2: string = "Todos";
  mostrarMovimientos=true;
 constructor(private fireService:FirebaseService) {

  this.fireService.getUser().then(val=>this.value1=val.toString());
  setTimeout(() => {
    console.log(this.value1);
    this.getDatos();
  }, 500);
 }

 ngOnInit() {

 }

 getDatos(){

  this.fireService.getColeccionUser(this.value1).subscribe((user:any) => {
    this.files=user;
   } );
 }

}
