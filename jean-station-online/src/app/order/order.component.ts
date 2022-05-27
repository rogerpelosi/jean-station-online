import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditorderdialogComponent } from '../adminorderdialog/editorderdialog.component';
import { Order } from '../models/Order';
import { OrderProduct } from '../models/OrderProduct';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private dialog: MatDialog){}

  ngOnInit(): void {
    this.productsArr = this.oneOrder.products;
    console.log(this.role);
  }

  @Input() oneOrder: Order;
  @Input() role: string;

  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output() handleUpdate: EventEmitter<Order> = new EventEmitter<Order>();

  productsArr: OrderProduct[] = [];

  edit(){
    console.log(`editing orderNo: ${this.oneOrder.orderNo}`);
    this.dialog.open(EditorderdialogComponent, {
      width: '300px',
      data: {order: this.oneOrder}
    })
  }

  delete(){
    let id:number = this.oneOrder.orderNo;
    this.orderService.deleteOrder(id).subscribe({
      next:success=>console.log(success),
      error:failure=>{
        console.log(failure);
        if(failure.error.text === 'Order Deleted'){
          this.handleDelete.emit(id)
        }
      }
    });
  }

}
