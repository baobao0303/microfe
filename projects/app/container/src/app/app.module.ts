import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppPage } from './app.component';

@NgModule({
  declarations: [AppPage],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppPage],
})
export class AppModule {}
