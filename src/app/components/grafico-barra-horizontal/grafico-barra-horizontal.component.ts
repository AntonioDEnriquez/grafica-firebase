import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  // Recibe informacion del componente padre
  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 40
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 50
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 75
  //   }
  // ];;


  // Algunos errores se solucionaron instalando  npm install @types/d3 --save-dev y npm install @angular/cdk --save

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'neons';

  // intervalo;

  constructor() {



    // this.intervalo = setInterval(() => {
    //   const newResults = [...this.results];

    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results = newResults;

    // }, 1500);

  }
  // ngOnDestroy(): void {
  //   // limpiamos el intervalo para que no exista una fuga de memoria en la aplicacion
  //   clearInterval(this.intervalo)
  // }

  onSelect(event: any) {
    console.log(event);
  }
}
