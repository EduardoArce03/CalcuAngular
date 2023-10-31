import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
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
