import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { ProductService } from './market/product-service';
import { ProductCard } from './market/product-card/product-card';

const pi = 3.14;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Joanne\'s Everyday Market ' + pi);

  productService = inject(ProductService);
}
