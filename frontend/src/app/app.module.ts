import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { GrupoprodutoComponent } from './pages/grupoproduto/grupoproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    HomeComponent,
    PagamentoComponent,
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
