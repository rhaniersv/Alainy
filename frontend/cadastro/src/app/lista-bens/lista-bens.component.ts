import { Component, OnInit } from '@angular/core';
import {BemRestService} from '../bem-rest.service';

@Component({
  selector: 'c-lista-bens',
  templateUrl: './lista-bens.component.html',
  styleUrls: ['./lista-bens.component.css']
})
export class ListaBensComponent implements OnInit {

  bem = {nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '',
  dataAquisicao: '', imovel: '', usado: '', cargaHoraria: ''};
  bems: any ;

  constructor(private bemRest: BemRestService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.bemRest.list().subscribe(p => {this.bems = p});
  }

  delete(bem) {
    this.bemRest.delete(bem.id).subscribe(p => {this.list()});
  }

}
