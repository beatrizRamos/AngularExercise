import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { EnderecosComponent } from './enderecos/enderecos.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { LojaComponent } from './loja/loja.component';
import { ListEnderecoComponent } from './list-endereco/list-endereco.component';
import { ListLojasComponent } from './list-lojas/list-lojas.component';

@NgModule({
  declarations: [
    AppComponent,
    EnderecosComponent,
    LojaComponent,
    ListEnderecoComponent,
    ListLojasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'enderecos', component: EnderecosComponent },
      { path: 'lojas', component: LojaComponent },
     { path: 'listEnderecos', component: ListEnderecoComponent },
     { path: 'listLojas', component: ListLojasComponent }
    ])
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
