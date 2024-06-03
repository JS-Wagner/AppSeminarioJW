import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { VinilCartComponent } from '../vinil-cart/vinil-cart.component';
import { Vinil } from '../vinilo-list/Vinil';
import { VinilCartService } from '../services/vinil-cart.service';
import { ViniloListComponent } from '../vinilo-list/vinilo-list.component';

@Component({
  selector: 'app-vinil-home',
  standalone: true,
  imports: [
    VinilCartComponent,
    ViniloListComponent,
  ],
  templateUrl: './vinil-home.component.html',
  styleUrl: './vinil-home.component.scss'
})
export class VinilHomeComponent { 
}
