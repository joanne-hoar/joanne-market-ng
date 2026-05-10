import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../market/product-service';
import { ProductCard } from '../market/product-card/product-card';
import { Product } from '../market/product';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
    productService = inject(ProductService);
    selectedProduct = signal<Product | null>(null);

    onSelectProduct(product: Product) {
      this.selectedProduct.set(product);
    }
}
