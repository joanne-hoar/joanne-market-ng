import { Injectable, signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 products = signal<Product[]>([
  {id: 1001, name: 'Cat', price: 100, imageUrl: '/products/cat.png'},
  {id: 1002, name: 'Dog', price: 200, imageUrl: '/products/dog.png'},
  {id: 1003, name: 'Rabbit', price: 150, imageUrl: '/products/rabbit.png'},
 ]);
}
