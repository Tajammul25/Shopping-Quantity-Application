import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  availableStock1: number = 20;
  availableStock2: number = 15;
  availableStock3: number = 10;
  count: number = 1; 
  minimum: boolean = false; 
  maximum: boolean = false; 
  maxQuantity: number = 20; 

  
  validateQuantity() {
    this.minimum = this.count < 1; 
    this.maximum = this.count > this.maxQuantity; 
  }

  addToCart() {
    
    this.validateQuantity();

    
    if (!this.minimum && !this.maximum) {
      // Logic to add to cart can be added here
      alert(`Added to cart: ${this.count} iPhone 15(s) at $${499 * this.count}`);
      this.availableStock1 -= this.count; 
      this.availableStock2 -= this.count; 
      this.availableStock3 -= this.count; 
      // Reset count back to default after adding to cart
      this.count = 1;
    }

   
  }

}
