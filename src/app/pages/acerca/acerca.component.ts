import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent {
  resultado: string = '';

  boton(value: string) {
    if (value === '/') {
      this.resultado += ' / ';
    } else {
      this.resultado += value;
    }
  }
  

  limpiar() {
    this.resultado = '';
  }

  calcular() {
      this.resultado = eval(this.resultado);
  }
}
