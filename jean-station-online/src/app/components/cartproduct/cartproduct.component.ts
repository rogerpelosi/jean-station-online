import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDTO } from 'src/app/models/ProductDTO';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.oneProduct)
  }

  @Input() oneProduct: ProductDTO;

  @Output() removeProduct: EventEmitter<number> = new EventEmitter<number>();


  handleDelete(){
    // console.log(`delete product no: ${this.oneProduct.productId}`)
    this.removeProduct.emit(this.oneProduct.productId);
  }

}
