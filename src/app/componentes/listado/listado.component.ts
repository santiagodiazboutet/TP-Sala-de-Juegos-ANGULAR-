import { Component, OnInit } from '@angular/core';
import { SelectItem, TreeNode } from 'primeng/api';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  options: SelectItem[];
   files: Observable<any>;
   cols: any[];
   value1: string = "Todos";
   value2: string = "Todos";
   mostrarMovimientos=true;
  constructor(private fireService:FirebaseService) {
    this.options = [{label: 'Todos', value: 'Todos'}
                    ,{label: 'Anagrama', value: 'Anagrama'}
                    ,{label: 'Agilidad Aritmetica', value: 'Agilidad Aritmetica'}
                    ,{label: 'Adivina el numero', value: 'Adivina el numero'}
                    ,{label: 'Piedra Papel o Tijera', value: 'Piedra Papel Tijera'}
                    ,{label: 'Memotest', value: 'Memotest'}
                    ,{label: 'Simon dice', value: 'Simon dice'}
                    ,{label: 'Ta Te Ti', value: 'Ta Te Ti'}];

  }

  ngOnInit() {
    this.fireService.getColeccion("todos").subscribe((user:any) => {
      this.files=user;
     } );
  }

  cambioLista(lista){
    console.log("halo1");
    if(this.value1==this.value2){
      console.log("halo")
    }else{
      this.value2=this.value1;
      if(this.value1=="Todos"){
        this.fireService.getColeccion("todos").subscribe((user:any) => {
          this.files=user;
          this.mostrarMovimientos=true;
         } );
      }else{
        this.fireService.getColeccion("juegos",this.value1).subscribe((user:any) => {
          this.files=user;
          console.log(user);
          if(user.length==0){
            return;
          }
          if(typeof user.slice(0,1).pop().cantidadMovimientos == 'undefined'){
            this.mostrarMovimientos=false;
          }
          else{
            this.mostrarMovimientos=true;
          }
         });
      }
    }
  }
}
