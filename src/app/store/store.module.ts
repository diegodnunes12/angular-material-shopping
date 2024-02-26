import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,

    MatCardModule,
    MatGridListModule,
    MatIconModule,
  ],
  declarations: [
    StoreComponent, 
    HomeComponent,
    DetailsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class StoreModule { }
