import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  selected = output<number>();

  onSelect() {
    this.selected.emit(this.product().id);
  }
}
