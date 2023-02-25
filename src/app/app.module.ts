import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalComponent } from './components/modal/modal.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ModalComponent,
    ProductDetailsComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SimpleModalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
