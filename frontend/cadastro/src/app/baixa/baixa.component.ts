import { Component, OnInit } from '@angular/core';
import { BemRestService } from '../bem-rest.service';
import { BaixaRestService } from '../baixa-rest.service';
import { TipoRestService } from '../tipo-rest.service';

@Component({
  selector: 'c-baixa',
  templateUrl: './baixa.component.html',
  styleUrls: ['./baixa.component.css']
})
export class BaixaComponent implements OnInit {

  baixa = {
    bem: { id: '', nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '', dataAquisicao: '', usado: '', tempoUso: '', cargaHoraria: '' },
    dataBaixa: '',
    tipo: { id: '', nome: '' },
    valorVenda: ''
};
baixas: any;
bem = { id: '', nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '', dataAquisicao: '', usado: '', tempoUso: '', cargaHoraria: '' };
bems: any;
tipo = { id: '', nome: '' };
tipos: any;

constructor(
  private bemRest: BemRestService,
  private baixaRest: BaixaRestService,
  private tipoRest: TipoRestService
) { }

ngOnInit() {
  this.listBem();
  this.listBaixa();
  this.listTipo();
}

saveBaixa() {
  this.listBem();
  this.bems.forEach(a => {
      if (a.id == this.bem.id) {
          this.bem = a;
      }
  });

  this.baixa.bem = this.bem;

  this.listTipo();
  this.tipos.forEach(a => {
      if (a.id == this.tipo.id) {
          this.tipo = a;
      }
  });

  this.baixa.tipo = this.tipo;

  this.baixaRest.save(this.baixa).subscribe(p => {
      this.listBaixa();
      this.baixa = {
          bem: { id: '', nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '', dataAquisicao: '', usado: '', tempoUso: '', cargaHoraria: '' },
          dataBaixa: '',
          tipo: { id: '', nome: '' },
          valorVenda: ''
      };
  });
}

simularBaixa() {
  this.listBem();
  this.bems.forEach(a => {
      if (a.id == this.bem.id) {
          this.bem = a;
      }
  });
  this.baixa.bem = this.bem;

  this.listTipo();
  this.tipos.forEach(a => {
      if (a.id == this.tipo.id) {
          this.tipo = a;
      }
  });
  this.baixa.tipo = this.tipo;

  this.baixaRest.simulate(this.baixa).subscribe(p => {this.baixa = p});
}

pegarBem() {
  this.listBem();
  this.bems.forEach(a => {
      if (a.id == this.bem.id) {
          this.bem = a;
      }
  });
}

listBaixa() {
  this.baixaRest.list().subscribe(p => { this.baixas = p });
}

listBem() {
  this.bemRest.list().subscribe(p => { this.bems = p });
}

listTipo() {
  this.tipoRest.list().subscribe(p => { this.tipos = p });
}

deleteBaixa(baixa) {
  this.baixaRest.delete(baixa.id).subscribe(p => { this.listBaixa() });
}

}
