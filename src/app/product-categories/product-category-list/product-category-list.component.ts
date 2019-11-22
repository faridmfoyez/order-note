import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent implements OnInit {

  productCategories = <ProductCategory[]>[
    {
      Id: 'muffin',
      Name: 'Muffin',
      Photo: 'http://dancake.com.bd/wp-content/uploads/2019/01/Chocolate-Muffin-2-1.jpg',
    },
    {
      Id: 'layer-cake',
      Name: 'Layer Cake',
      Photo: 'http://geeky.digital/dcake/wp-content/uploads/2019/01/Layer-Cake.jpg'
    },
    {
      Id: 'swiss-roll',
      Name: 'Swiss Roll',
      Photo: 'http://geeky.digital/dcake/wp-content/uploads/2019/01/Chocolate-Swiss-Roll-1.jpg'
    },
    {
      Id: 'macaroons',
      Name: 'Macaroons',
      Photo: 'http://geeky.digital/dcake/wp-content/uploads/2019/01/Coconut-Macaroons-1.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
