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
      Id: 'vanilla-muffin',
      Name: 'Vanilla Muffin',
      Photo: 'http://dancake.com.bd/wp-content/uploads/2018/12/vanilla-muffin-768x768.jpg',
    },
    {
      Id: 'chocolate-muffin',
      Name: 'Chocolate Muffin',
      Photo: 'http://dancake.com.bd/wp-content/uploads/2018/12/2-Chocolate-Muffin.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
