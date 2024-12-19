import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { OrderAdminComponent } from './order/order.admin.component';
import { DetailOrderAdminComponent } from './detail-order/detail.order.admin.component';
import { ProductAdminComponent } from './product/product.admin.component';
import { CategoryAdminComponent } from './category/category.admin.component';
import { CommonModule } from '@angular/common';
import { DetailProductAdminComponent } from './detail-product/detail.product.admin.component';
import { FormsModule } from '@angular/forms';
import { NewProductAdminComponent } from './new-product/new.product.admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrderAdminComponent,
    DetailOrderAdminComponent,
    DetailProductAdminComponent,
    ProductAdminComponent,
    NewProductAdminComponent,
    CategoryAdminComponent,
  ],
  imports: [
    AdminRoutingModule, // import routes,
    CommonModule,
    FormsModule
  ]
})
export class AdminModule {}