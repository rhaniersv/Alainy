import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { GrupoprodutoComponent } from './pages/grupoproduto/grupoproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    PaymentComponent,
    LoginComponent,
    PessoaComponent,
    ProdutoComponent,
    GrupoprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
