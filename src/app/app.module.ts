import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { SearchComponent } from './components/atoms/search/search.component';
import { TableComponent } from './components/molecules/table/table.component';
import { ListProductsComponent } from './components/pages/list-products/list-products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/atoms/pagination/pagination.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TableComponent,
    ListProductsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(), ProductsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }