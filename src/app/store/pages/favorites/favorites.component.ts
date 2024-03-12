import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public products$: Observable<ProductInterface[]> | undefined;

  constructor(
    private productsService: ProductsService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getFavoritesProducts();
  }

  public onClickNavigateDetails(productId: number) {
    this.router.navigate(["details", productId])
  }

  public toggleFavorite(product: ProductInterface) {
    product.favorite = !product.favorite;
    this.productsService.updateProduct(product);
  }
}
