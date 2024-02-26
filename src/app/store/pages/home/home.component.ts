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
  public breakpoint: number = 4;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

  public onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  public onClickNavigate(productId: number) {
    this.router.navigate(["details", productId])
  }
}
