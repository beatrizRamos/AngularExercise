import { Component, OnInit } from '@angular/core';
import { Loja } from '../entidades/loja';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
  providers: [DBService]
})
export class LojaComponent implements OnInit {
novaLoja : Loja;
lojas : Loja[];
carregando: boolean;

  constructor(private database: DBService) { 
    this.novaLoja = new Loja();
    this.carregarUsuarios();
  }

  ngOnInit() {
  }
  private carregarUsuarios() {
    this.carregando = true;

    this.database.listar<Loja>('lojas')
    .then(lojasDB => {
      this.lojas = lojasDB;

      this.carregando = false;
    });
  }

  cadastrar() {
    this.database.inserir('lojas', this.novaLoja)
      .then(() => {
        alert('Loja cadastrada com sucesso');
        this.novaLoja = new Loja();
        this.carregarUsuarios();
      });
  }

  remover(eid: string) {
    this.database.remover('lojas', eid)
      .then(() => {
        alert('loja removido com sucesso');

        this.carregarUsuarios();
      });
  }

  editar(loja) {
    loja.editando = true;
  }

  cancelEdit(loja) {
    loja.editando = false;
  }

  confirmEdit(loja) {
    this.database.atualizar('lojas', loja.eid, { nome: loja.nome, cnpj: loja.cnpj })
      .then(() => {
        alert('loja atualizado com sucesso');

        this.carregarUsuarios();
      });
  }
}
