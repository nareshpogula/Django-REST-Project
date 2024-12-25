import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
// import { AuthInterceptor } from './interceptor/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ManageProductsComponent,
    OrdersComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    ApiService,
    importProvidersFrom(HttpClient),
              provideHttpClient(withFetch()),
              provideClientHydration(),
              // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
              // provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
