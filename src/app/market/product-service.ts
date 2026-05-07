import { Injectable, signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 products = signal<Product[]>([
  {id: 1001, name: 'Cat', price: 100},
  {id: 1002, name: 'Dog', price: 200},
  {id: 1003, name: 'Rabbit', price: 150},
 ]);
}
