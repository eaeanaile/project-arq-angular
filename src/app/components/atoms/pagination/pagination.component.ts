import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() totalResults?: number;
  @Input() resultadosOption: number[] = [5, 10, 20];
  @Input() actualizarResultados?: number;

  @Output() actualizarResultadosChange = new EventEmitter<number>();

  get mostrarOption(): number | undefined {
    return this.resultadosOption.find(
      (option) => option === this.actualizarResultados
    );
  }

  get mostrarResultados(): string {
    return `${this.actualizarResultados} Resultados`;
  }

  optionResultsChanged(value: number) {
    this.actualizarResultados = value;
    this.actualizarResultadosChange.emit(this.actualizarResultados);
  }

}
