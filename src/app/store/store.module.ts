import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [
    StoreComponent, 
    HomeComponent,
    CardComponent,
  ],
  providers: [
    ProductsService
  ]
})
export class StoreModule { }
