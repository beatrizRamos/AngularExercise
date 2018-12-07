import { Component, OnInit } from '@angular/core';
import { Endereco } from '../entidades/endereco';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css'],
  providers: [DBService]
})
export class EnderecosComponent implements OnInit {

novoEndereco : Endereco;
enderecos: Endereco[];

carregando: boolean;

  constructor(private database: DBService) { 
    this.novoEndereco = new Endereco();
    this.carregarUsuarios();
  }

  ngOnInit() {
  }
  private carregarUsuarios() {
    this.carregando = true;

    this.database.listar<Endereco>('enderecos')
    .then(enderecoDB => {
      this.enderecos = enderecoDB;

      this.carregando = false;
    });
  }

  cadastrar() {
    this.database.inserir('enderecos', this.novoEndereco)
      .then(() => {
        alert('Endereço cadastrado com sucesso');
        this.novoEndereco = new Endereco();
        this.carregarUsuarios();
      });
  }

  remover(eid: string) {
    this.database.remover('enderecos', eid)
      .then(() => {
        alert('Endereço removido com sucesso');

        this.carregarUsuarios();
      });
  }

  editar(endereco) {
    endereco.editando = true;
  }

  cancelEdit(endereco) {
    endereco.editando = false;
  }

  confirmEdit(endereco) {
    this.database.atualizar('enderecos', endereco.eid, { bairro: endereco.bairro, rua: endereco.rua })
      .then(() => {
        alert('Endereço atualizado com sucesso');

        this.carregarUsuarios();
      });
  }

}
