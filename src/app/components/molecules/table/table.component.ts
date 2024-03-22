import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  @Input() productsFiltereds?: Product[] = [];

  @Input() productsSearch?: Product[] = [];
  searchName: string = "";
  filteredProductsList?: Product[] = [];

  selectedResultOption: number = 5;
  resultadsOption: number[] = [5, 10, 20];

  ngOnInit() {
    this.searchProducts();
  }

  constructor(
    private productsService: ProductsService
  ) {}

  searchProducts() {
    this.productsService.getDataProducts().subscribe((products) => {
      this.productsSearch = products;
    this.filteredProductsList = this.productsSearch?.filter(product =>
      product.name.toLowerCase().includes(this.searchName.toLowerCase())
    );
    this.filteredProductsList = this.filteredProductsList.slice(0, this.selectedResultOption);
    console.log('productos filtrados', this.filteredProductsList)
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      undefined, 
      { year: 'numeric', 
        month: 'numeric', 
        day: 'numeric' 
      }
    );
  }
}
