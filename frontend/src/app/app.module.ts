import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { routes } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ManageProductsComponent,
    OrdersComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
    
  ],
  providers: [
    provideClientHydration(),
    ApiService,
    importProvidersFrom(HttpClient),
              provideHttpClient(withFetch()),
              provideClientHydration(),
              provideAnimationsAsync(),
              // provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
