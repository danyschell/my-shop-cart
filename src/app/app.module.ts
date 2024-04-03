
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
<<<<<<< HEAD
=======
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


import { HttpClientModule } from '@angular/common/http';
>>>>>>> 73de924 (First commit)

@NgModule({
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    HttpClientModule,
>>>>>>> 73de924 (First commit)
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
<<<<<<< HEAD
=======
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
>>>>>>> 73de924 (First commit)
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
<<<<<<< HEAD
=======
    CartComponent,
    ShippingComponent
>>>>>>> 73de924 (First commit)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/