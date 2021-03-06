import { Component } from '@angular/core';
import {LicensePlate} from '../license-plate';
import {Observable} from 'rxjs/Observable';
import {CartService} from '../cart.service';

@Component({
  selector: 'ngs-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cartContents: LicensePlate[];

  constructor(private service: CartService) {
    service.getCartContents().subscribe(data => this.cartContents = data);
  }

  removeFromCart(plate: LicensePlate) {
    this.service.removeFromCart(plate).subscribe(done => {
        this.service.getCartContents().subscribe(data => this.cartContents = data);
        alert(`Plate '${plate.title}' removed from cart`);
      });
  }

}
