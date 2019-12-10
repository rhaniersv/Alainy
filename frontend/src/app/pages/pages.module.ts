import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {PagamentoComponent} from './pagamento/pagamento.component';
import {PessoaComponent} from './pessoa/pessoa.component';
import {ProdutoComponent} from './produto/produto.component';
import {GrupoprodutoComponent} from './grupoproduto/grupoproduto.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    CarrinhoComponent,
    PagamentoComponent,
    PessoaComponent,
    ProdutoComponent,
    GrupoprodutoComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  exports: [],
  bootstrap: []
})
export class PagesModule {
}

