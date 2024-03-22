import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule } from '@angular/material';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';
import { DetailsComponent } from './pages/details/details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    StoreComponent, 
    HomeComponent,
    DetailsComponent,
    FavoritesComponent,
    LoginComponent,
  ],
  providers: [
    UsersService,
    ProductsService,
  ]
})
export class StoreModule { }
