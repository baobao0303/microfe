import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalPage } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [PortalPage],
  imports: [BrowserModule, PortalRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  bootstrap: [PortalPage],
  providers: [],
})
export class PortalModule {}
