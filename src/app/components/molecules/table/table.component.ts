import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() products: Product[] = [];



}
