import {FormaPagamento} from './payment.model';
import {Pessoa} from './pessoa.model';

export class Pedido {
  cliente: Pessoa;
  dataEmissao: FormaPagamento;
  dataAutorizacao: Date;
  status: string;
  total: number;
  desconto: number;
}
