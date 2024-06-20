import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders =[]
  constructor(private api: ApiService) {
  
    this.getAllCustomers();
  
   }

   getAllCustomers() :any {
    this.api.getAllCustomers().subscribe(
      {
        next: (data) => {
        this.orders =data.data;
        console.log(this.orders);
        
      },
      
      error: (e) => console.error(e)
      })
 }

}
