import { Component, inject } from '@angular/core';
import { ProductService } from '../market/product-service';
import { ProductCard } from '../market/product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
    productService = inject(ProductService);
}
