import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public products$: Observable<ProductInterface[]> | undefined;

  constructor(private router: Router, private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.products$ = this.favoritesService.productInterfaceChanges$;
  }

  public onClickNavigate(productId: number) {
    this.router.navigate(["details", productId])
  }

  public toggleFavorite(product: ProductInterface) {
    this.favoritesService.toggleFavorite(product);
  }

}
