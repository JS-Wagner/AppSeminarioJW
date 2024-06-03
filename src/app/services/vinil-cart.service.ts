import { Injectable } from '@angular/core';
import { Vinil } from '../vinilo-list/Vinil';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinilCartService {

  private _cartList: Vinil[] = []
  private _cartListSubject: BehaviorSubject<Vinil[]> = new BehaviorSubject(this._cartList);
  public cartItems$: Observable<Vinil[]> = this._cartListSubject.asObservable();

  constructor() { }

  addToCart(vinil: Vinil){
    let item: Vinil | undefined = this._cartList.find((v1) => v1.name == vinil.name);
    if(!item){
      let vinilCopy: Vinil = { ...vinil };
      this._cartList.push(vinilCopy);
    } else {
      item.quantity += vinil.quantity;
    }
    this._cartListSubject.next(this._cartList);
  }

  getCartItems(): Vinil[] {
    return this._cartList;
  }

  getCartItemByName(name: string): Vinil | undefined {
    return this._cartList.find(v => v.name === name);
  }

}
