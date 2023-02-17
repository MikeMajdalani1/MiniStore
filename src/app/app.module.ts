import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [AppComponent, ProductCardComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, SimpleModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
