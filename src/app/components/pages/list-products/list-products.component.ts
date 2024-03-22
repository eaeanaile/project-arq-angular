import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {


  listProductsFiltereds: Product[] = [];

}
