import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit{

  @Input() buscarProducts: Product[] = [];
  searchTerm: string = '';
  filteredProducts: Product[] = [];

  totalResultsList: number = 0;
  resultadosOptionList: number[] = [5, 10, 20];
  actualizarResultadosList: number = 5;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts() {
    this.productsService.getDataProducts().subscribe(products => {
      this.buscarProducts = products;
      this.filteredProducts = this.buscarProducts.filter(product =>
        product.name.includes(this.searchTerm)
      );
    });
  }

}
