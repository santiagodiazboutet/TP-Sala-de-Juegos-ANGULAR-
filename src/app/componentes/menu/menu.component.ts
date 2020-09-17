import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MenuItem, } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.items = [
    {label: 'Inicio', icon: 'pi pi-fw pi-home',styleClass:'button' , command: (event:any)=>{
      this.router.navigate(["/Principal"]);
    }},

    {label: 'Juegos', icon: 'pi pi-fw pi-star',

    items: [{
      label: 'Adivina',

      command: (event:any)=>{
        this.router.navigate(["/Juegos/Adivina"]);
      },
      },{
        label: 'Agilidad',

      routerLink:(["/Juegos/Agilidad"]),
      },{
        label: 'Piedra papel o tijeras',

      routerLink:(["/Juegos/Jankenpon"]),
      },{
        label: 'Simon',

        routerLink:(["/Juegos/Simon"]),
      },{
        label: 'TaTeTi',

        routerLink:(["/Juegos/Tateti"]),
      },
      {
        label:'Memotest',
        routerLink:(["/Juegos"])
      }
    ]
    },
    ];
    this.items[0].styleClass="button";
    console.log(this.items[0].styleClass);
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }

}
