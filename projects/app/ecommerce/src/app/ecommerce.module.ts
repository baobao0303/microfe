import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommercePage } from './ecommerce.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [EcommercePage],
  imports: [BrowserModule, EcommerceRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  bootstrap: [EcommercePage],
  providers: [],
})
export class EcommerceModule {}
