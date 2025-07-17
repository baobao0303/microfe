import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommercePage } from './ecommerce.component';
@NgModule({
  declarations: [EcommercePage],
  imports: [BrowserModule, EcommerceRoutingModule],
  bootstrap: [EcommercePage],
  providers: [],
})
export class EcommerceModule {}
