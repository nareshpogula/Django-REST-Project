import { Component } from '@angular/core';
import { Products } from '../../models/products.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  product=[];
  customerName: any;
  constructor(private api: ApiService) {
  this.getAllProducts();
   }
   getAllProducts = () => {
    this.api.getAllProducts().subscribe(
      {
        next: (data) => {
        this.product =data.data;
        console.log(this.product);
      },
      
      error: (e) => console.error(e)
      
 })
 }


}
