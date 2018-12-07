import { Component, OnInit } from '@angular/core';
import { Endereco } from '../entidades/endereco';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-list-endereco',
  templateUrl: './list-endereco.component.html',
  styleUrls: ['./list-endereco.component.css'],
  providers: [DBService]
})
export class ListEnderecoComponent implements OnInit {
  enderecos: Endereco[];
  carregando: boolean;

  constructor(private database: DBService) { 
    this.carregarEnderecos();
  }

  ngOnInit() {
  }
  private carregarEnderecos() {
    this.carregando = true;

    this.database.listar<Endereco>('enderecos')
    .then(enderecosDB => {
      this.enderecos = enderecosDB;

      this.carregando = false;
    });
  }

  remover(eid: string) {
    this.database.remover('enderecos', eid)
      .then(() => {
        alert('Endereço removido com sucesso');

        this.carregarEnderecos();
      });
  }

  editar(endereco) {
    endereco.editando = true;
  }

  cancelEdit(endereco) {
    endereco.editando = false;
  }

  confirmEdit(endereco) {
    this.database.atualizar('enderecos', endereco.eid, { bairro: endereco.bairro, rua: endereco.rua, numero: endereco.numero })
      .then(() => {
        alert('Endereço atualizado com sucesso');

        this.carregarEnderecos();
      });
  }

}
