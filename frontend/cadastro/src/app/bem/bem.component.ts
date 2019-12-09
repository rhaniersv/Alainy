import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { BemRestService } from '../bem-rest.service';

declare var $: any;

@Component({
  selector: 'c-bem',
  templateUrl: './bem.component.html',
  styleUrls: ['./bem.component.css']
})
export class BemComponent implements OnInit {

  bem = {
    nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '',
    dataAquisicao: '', usado: '', tempoUso: '', cargaHoraria: ''
  };
  bems: any;

  constructor(private bemRest: BemRestService) { }

  ngOnInit() {
  //  $('#label_turnos_trabalhados_do_bem').hide();
  //  $('#turnos_trabalhados_do_bem').hide();
    this.list();
  }

  verificaEstadoBem() {

    $(document).ready(function () {
      if (document.getElementById('estado_do_bem_valor_2')) {
        $('#label_turnos_trabalhados_do_bem').show();
        $('#turnos_trabalhados_do_bem').show();

        console.log('funcao funciona');
      }
    });

  }

  save() {
    this.bemRest.save(this.bem).subscribe(p => {
      this.list();
      this.bem = {
        nome: '', vidaUtil: '', valorResidual: '', precoAquisicao: '',
        dataAquisicao: '', usado: '', tempoUso: '', cargaHoraria: ''
      };
    });
  }

  list() {
    this.bemRest.list().subscribe(p => { this.bems = p });
  }

}
