import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalPage } from './app.component';
import { PortalRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [PortalPage],
  imports: [BrowserModule, PortalRoutingModule],
  bootstrap: [PortalPage],
  providers: [],
})
export class AppModule {}
