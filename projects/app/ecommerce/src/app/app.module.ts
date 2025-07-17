import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceRoutingModule } from './app-routing.module';
import { EcommercePage } from './app.component';
@NgModule({
  declarations: [EcommercePage],
  imports: [BrowserModule, EcommerceRoutingModule],
  bootstrap: [EcommercePage],
  providers: [],
})
export class AppModule {}
