import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input("product") public product: ProductInterface | undefined;

  constructor() { }

  ngOnInit() {
  }

}
