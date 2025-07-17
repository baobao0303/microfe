import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalPage } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
@NgModule({
  declarations: [PortalPage],
  imports: [BrowserModule, PortalRoutingModule],
  bootstrap: [PortalPage],
  providers: [],
})
export class PortalModule {}
