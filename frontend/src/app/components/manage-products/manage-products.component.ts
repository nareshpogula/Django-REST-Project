import { Component } from '@angular/core';
import { Products } from '../../models/products.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {

  products = []
 prod: Products = { 
  // product_id :0,
  // product_name :"Milk",
  // price_per_unit : 0,
  // uom  : 0,
};
updated = false;
submitted = false;
updateForm =false;
productForm = false;
addButton = true;

 constructor(private api: ApiService) {
  this.getAllProducts();

 }

 getAllProducts = () => {
    this.api.getAllProducts().subscribe(
      {
        next: (data) => {
        this.products =data.data;
        console.log(this.products);
      },
      
      error: (e) => console.error(e)
      
 })
 }

 deleteProduct(product:Products): void {
  this.api.deleteProduct(product.product_id)
    .subscribe({
      next: (res) => {
        console.log(res);
        // this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
}
update(product:any): void {
  this.productForm = false;
  this.submitted = false
  this.updateForm = true
  this.prod = {
    product_id : product.product_id,
    product_name : product.product_name,
    price_per_unit : product.price_per_unit,
    uom : product.uom.uom_id,
  }

}
updateProduct(product:Products): void {

  const data = {
    product_id: product.product_id,
    product_name: product.product_name,
    price_per_unit: product.price_per_unit,
    uom: product.uom,
  };

  this.api.updateProduct(data.product_id,data)
  .subscribe({
    next: (res) => {
      console.log(res);

    },
    error: (e) => console.error(e)
  });
  this.updated = true
  this.updateForm = false
}

saveProduct(): void {
  const data = {
    product_id: this.prod.product_id,
    product_name: this.prod.product_name,
    price_per_unit: this.prod.price_per_unit,
    uom: this.prod.uom
  };

  this.api.createProducts(data)
    .subscribe({
      next: (res) => {
        this.submitted = true;
        console.log(res);
      },
      error: (e) => {
        this.productForm = true;
        console.log(data)
        console.error(e)}
    });

  this.productForm = false;
  this.updateForm = false;
  this.submitted = false
  
}

newProduct(): void {
  this.submitted = false;
  this.productForm = false;
  this.updateForm = false;
  this.addButton = true;
  this.updated=false;

  this.prod = {
    // product_id :0,
    // product_name :" ",
    // price_per_unit : 0,
    // uom : 0,
  };
}
addProduct(): void{
  this.productForm = true;
  this.addButton = false;
  this.updated=false;
 

}

clear(): void {
  // this.submitted = false;
  // this.productForm = false;
  // this.addButton = true;
  this.prod = {
    // product_id :0,
    // product_name :" ",
    // price_per_unit : 0,
    // uom : 0,
  };
}


}
