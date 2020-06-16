import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  //inject into the constructor as a argument to the constructor
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

   addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

//subscribe to the route parameters and fetch the product based on the productId
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  

}
