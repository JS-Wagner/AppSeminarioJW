import { Component, OnInit} from '@angular/core';
import { VinilCartService } from '../services/vinil-cart.service';
import { Vinil } from '../vinilo-list/Vinil';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vinil-cart',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './vinil-cart.component.html',
  styleUrl: './vinil-cart.component.scss',
  animations: [
    trigger('cartState', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
        padding: '0px',
        margin: '0px',
        border: 'none'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
})
export class VinilCartComponent implements OnInit{

  cartList: Vinil[] = [];
  isCartCollapsed: boolean = false;

  constructor(private cartService: VinilCartService){
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => this.cartList = items);
  }

  removeFromCart(vinil: Vinil) {
    this.cartService.removeFromCart(vinil);
  }

  toggleCart() {
    this.isCartCollapsed = !this.isCartCollapsed;
  }

  cartAnimationState() {
    return this.isCartCollapsed ? 'collapsed' : 'expanded';
  }

}
