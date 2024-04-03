import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
<<<<<<< HEAD
=======
import { CartService } from '../cart.service';
>>>>>>> 73de924 (First commit)

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  /* ... */
<<<<<<< HEAD
  constructor(private route: ActivatedRoute) { }
=======
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
>>>>>>> 73de924 (First commit)

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
<<<<<<< HEAD
=======
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
>>>>>>> 73de924 (First commit)
}