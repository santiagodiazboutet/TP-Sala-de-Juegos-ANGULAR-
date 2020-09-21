import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from 'src/app/clases/juego-memotest';

@Component({
  selector: 'app-cuadrados-memo',
  templateUrl: './cuadrados-memo.component.html',
  styleUrls: ['./cuadrados-memo.component.css']
})
export class CuadradosMemoComponent implements OnInit {
  @Input() imagen:Unidad;

  constructor() { }

  ngOnInit(): void {
  }

}
