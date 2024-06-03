import { Component, OnInit } from '@angular/core';
import { Vinil } from './Vinil';
import { VinilDataService } from '../services/vinil-data.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { VinilCartService } from '../services/vinil-cart.service';
import { InputIntegerComponent } from '../input-integer/input-integer.component';

@Component({
  selector: 'app-vinilo-list',
  standalone: true,
  imports: [
    RouterModule,
    CurrencyPipe,
    InputIntegerComponent,
  ],
  templateUrl: './vinilo-list.component.html',
  styleUrl: './vinilo-list.component.scss'
})
export class ViniloListComponent implements OnInit{
  vinils: Vinil[] = [];

  constructor(
    private cartService: VinilCartService,
    private vinilService: VinilDataService){
  }

  //Subscribe a data traida desde mockAPI
  ngOnInit(): void {
    this.vinilService.getAll().subscribe(vinilsData => this.vinils = vinilsData);
  };

  //Añade un vinilo al carrito
  addToCart(vinil: Vinil): void{
    this.cartService.addToCart(vinil);
    vinil.stock -= vinil.quantity;
    vinil.quantity = 0;
  }

}
