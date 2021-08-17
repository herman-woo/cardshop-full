import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { DetailsComponent } from './products/details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path: 'location', component: LocationComponent},   
  { path: 'product/:id', component: DetailsComponent},
  { path: 'cart/checkout', component: CheckoutComponent},
  { path: 'cart/confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
