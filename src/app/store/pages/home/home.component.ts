import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products$: Observable<ProductInterface[]> | undefined;

  constructor(
    private productsService: ProductsService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

  public onClickNavigateDetails(productId: number) {
    this.router.navigate(["details", productId])
  }

  public toggleFavorite(product: ProductInterface) {
    product.favorite = !product.favorite;
    this.productsService.updateProduct(product);
  }
}
