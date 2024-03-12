import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,

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
    ProductsService
  ]
})
export class StoreModule { }
