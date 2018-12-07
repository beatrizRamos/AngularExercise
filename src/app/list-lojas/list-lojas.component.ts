import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Loja } from '../entidades/loja';

@Component({
  selector: 'app-list-lojas',
  templateUrl: './list-lojas.component.html',
  styleUrls: ['./list-lojas.component.css'],
  providers: [DBService]
})
export class ListLojasComponent implements OnInit {
  lojas: Loja[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarLojas();
   }

  ngOnInit() {
  }
  private carregarLojas() {
    this.carregando = true;

    this.database.listar<Loja>('lojas')
    .then(lojasDB => {
      this.lojas = lojasDB;

      this.carregando = false;
    });
  }

  remover(eid: string) {
    this.database.remover('lojas', eid)
      .then(() => {
        alert('Loja removido com sucesso');

        this.carregarLojas();
      });
  }

  editar(loja) {
    loja.editando = true;
  }

  cancelEdit(loja) {
    loja.editando = false;
  }

  confirmEdit(loja) {
    this.database.atualizar('lojas', loja.eid, { loja: loja.nome, cnpj: loja.cnpj })
      .then(() => {
        alert('Loja atualizado com sucesso');

        this.carregarLojas();
      });
  }

}
