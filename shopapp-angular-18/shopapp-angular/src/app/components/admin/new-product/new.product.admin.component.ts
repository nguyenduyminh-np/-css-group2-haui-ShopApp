import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminModule } from 'src/app/components/admin/admin.module';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/services/product.service';
import { ProductResponse } from 'src/app/responses/product/product.response';

@Component({
  selector: 'app-new-product-admin',
  templateUrl: './new.product.admin.component.html',
//   styleUrls: ['./detail.product.admin.component.scss']
})

export class NewProductAdminComponent implements OnInit{
    product: ProductResponse = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date()
    };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    // this.getProductDetails();
  }

  addProduct() : void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}