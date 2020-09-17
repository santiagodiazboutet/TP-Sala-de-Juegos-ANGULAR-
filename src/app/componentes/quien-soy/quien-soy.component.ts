import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  items:MenuItem[];
  constructor(private primengConfig: PrimeNGConfig, private router:Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home',styleClass:'button' , command: (event:any)=>{
        this.router.navigate(["/Principal"]);
      }},

    ];



  }

}
