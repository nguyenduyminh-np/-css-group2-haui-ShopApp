import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-admin',
  templateUrl: './product.admin.component.html',
  styleUrls: ['./product.admin.component.scss']
})
export class ProductAdminComponent implements OnInit{
  products: Product[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 12;
  pages: number[] = [];
  totalPages:number = 0;
  keyword:string = "";
  visiblePages: number[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }
  ngOnInit(): void {
    debugger
    this.getProducts(this.keyword, this.currentPage, this.itemsPerPage);
  }

  getProducts(keyword: string, page: number, limit: number) {
    debugger
    this.productService.getProducts(keyword, 0, page, limit).subscribe({
      next: (response: any) => {
        debugger
        this.products = response.products;
        this.totalPages = response.totalPages;
        this.visiblePages = this.generateVisiblePageArray(this.currentPage, this.totalPages);
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching products:', error);
      }
    });
  }
  onPageChange(page: number) {
    debugger;
    this.currentPage = page;
    this.getProducts(this.keyword, this.currentPage, this.itemsPerPage);
  }

  generateVisiblePageArray(currentPage: number, totalPages: number): number[] {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(currentPage - halfVisiblePages, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return new Array(endPage - startPage + 1).fill(0)
        .map((_, index) => startPage + index);
  }
  deleteProduct(id:number) {
    const confirmation = window
      .confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      debugger
      this.productService.deleteProduct(id).subscribe({
        next: (response: any) => {
          debugger
          // location.reload();
          this.getProducts(this.keyword, this.currentPage, this.itemsPerPage);
        },
        complete: () => {
          debugger;
        },
        error: (error: any) => {
          debugger;
          console.error('Error fetching products:', error);
        }
      });
    }
  }

  viewDetails(product:Product) {
    debugger
    this.router.navigate(['/admin/products', product.id]);
  }

  addProduct() {
    this.router.navigate(['/admin/products/new']);
  }
  
}