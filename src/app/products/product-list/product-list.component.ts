import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = <Product[]>[
    {
      Id: 'muffin',
      Name: 'Muffin',
    },
    {
      Id: 'layer-cake',
      Name: 'Layer Cake'
    },
    {
      Id: 'swiss-roll',
      Name: 'Swiss Roll'
    },
    {
      Id: 'macaroons',
      Name: 'Macaroons'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
