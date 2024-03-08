import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly productsFavoritesChanges: BehaviorSubject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>([]);
  public readonly productInterfaceChanges$: Observable<ProductInterface[]> = this.productsFavoritesChanges.asObservable();

  constructor() { }

  public toggleFavorite(product: ProductInterface) {
    let items = this.productsFavoritesChanges.getValue();
    const item = items.find(item => item.id === product.id);

    if(item) {
      items = items.filter(item => item.id !== product.id);
    } else {
      items.push(product);
    }

    this.productsFavoritesChanges.next(items);
  }
}
