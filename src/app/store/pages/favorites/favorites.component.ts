import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public productsFavorites$: Observable<ProductInterface[]> | undefined;

  constructor(
    private userService: UsersService, 
    private router: Router
  ) { }

  ngOnInit() {    
    const userToken = localStorage.getItem("user_token");

    // verifica se o usuário está logado no sistema
    if(userToken) {
      this.productsFavorites$ = this.userService.getUser(parseInt(userToken)).pipe(map(user => user.favorites));
    } else {
      // apresenta uma mensagem se deseja logar
      
    }
  }

  public onClickNavigateDetails(productId: number) {
    this.router.navigate(["details", productId])
  }

  public toggleFavorite(product: ProductInterface) {
    product.favorite = !product.favorite;
    //this.productsService.updateProduct(product);
  }
}
