import { Component, OnInit } from '@angular/core';

// Interface import
import { Album } from '../album'

// Service imports
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo:Album;

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

}
