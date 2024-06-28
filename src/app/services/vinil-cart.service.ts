import { Injectable } from '@angular/core';
import { Vinil } from '../vinilo-list/Vinil';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinilCartService {

  // Subject para las actualizaciones de stock
  private _stockUpdateSubject: Subject<{ id: number, stock: number }> = new Subject();
  public stockUpdates$: Observable<{ id: number, stock: number }> = this._stockUpdateSubject.asObservable();

  private _cartList: Vinil[] = []
  private _cartListSubject: BehaviorSubject<Vinil[]> = new BehaviorSubject(this._cartList);
  public cartItems$: Observable<Vinil[]> = this._cartListSubject.asObservable();

  constructor() { }

  addToCart(vinil: Vinil){
    let item: Vinil | undefined = this._cartList.find((v1) => v1.id === vinil.id);
    if(!item){
      let vinilCopy: Vinil = { ...vinil };
      this._cartList.push(vinilCopy);
    } else {
      item.quantity += vinil.quantity;
    }
    this._updateStock(vinil.id, vinil.stock - vinil.quantity);
    this._cartListSubject.next(this._cartList);
  }

  removeFromCart(vinil: Vinil){
    let index: number = this._cartList.findIndex((v1) => v1.id === vinil.id);
    if(index !== -1){
      let item = this._cartList[index];
      this._updateStock(item.id, vinil.stock); // Incrementar el stock correctamente
      //._updateStock(item.id, vinil.stock + item.quantity);
      this._cartList.splice(index, 1)
      this._cartListSubject.next(this._cartList);
    }
  }

  private _updateStock(id:number, stock: number){
    // Emitir la actualización de stock
    this._stockUpdateSubject.next({ id, stock });
  }

  private _getCartItems(): Vinil[] {
    return this._cartList;
  }

  private _getCartItemByName(name: string): Vinil | undefined {
    return this._cartList.find(v => v.name === name);
  }

}
