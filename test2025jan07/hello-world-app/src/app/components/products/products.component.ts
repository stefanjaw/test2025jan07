import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 199.99,
      category: 'Electronics'
    },
    {
      name: 'Cotton T-Shirt',
      description: 'Comfortable 100% cotton t-shirt in various colors',
      price: 29.99,
      category: 'Clothing'
    },
    {
      name: 'JavaScript Guide',
      description: 'Complete guide to modern JavaScript development',
      price: 49.99,
      category: 'Books'
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone with advanced camera features',
      price: 799.99,
      category: 'Electronics'
    },
    {
      name: 'Running Shoes',
      description: 'Professional running shoes for athletes',
      price: 149.99,
      category: 'Clothing'
    },
    {
      name: 'Web Design Book',
      description: 'Modern web design principles and practices',
      price: 39.99,
      category: 'Books'
    }
  ];
}