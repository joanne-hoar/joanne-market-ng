import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Product } from './market/product';
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

  // used ChatGPT 5.4 with sytnax for instantiation
  product:Product = {
    id: 1,
    name: "Test Product",
    price: 9.99,
    description: "This is a test product",
    image: "test.png"
  };
}
