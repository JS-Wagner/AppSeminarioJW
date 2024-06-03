import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VinilCartService } from '../services/vinil-cart.service';
import { Vinil } from '../vinilo-list/Vinil';

@Component({
  selector: 'app-vinil-cart',
  standalone: true,
  imports: [],
  templateUrl: './vinil-cart.component.html',
  styleUrl: './vinil-cart.component.scss'
})
export class VinilCartComponent implements OnInit{

  cartList: Vinil[] = [];

  constructor(private cartService: VinilCartService){
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => this.cartList = items);
  }

  removeFromCart(vinil: Vinil) {
    //this.cartService.removeFromCart(vinil);
  }

}
