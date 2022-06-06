import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-descriptiondialog',
  templateUrl: './descriptiondialog.component.html',
  styleUrls: ['./descriptiondialog.component.css']
})
export class DescriptiondialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DescriptiondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService) {}

  product: Product = this.data.product;

  ngOnInit(){
    // console.log(this.data)
  }

  onNoClick(): void {

    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}
