import { ProdutoModel } from './../../models/ProdutoModel';
import { ProdutoService } from './../../services/produto.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit{

  produtos : ProdutoModel[] = []

  constructor(private produtoService: ProdutoService){

  }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe((produtos)=>{
      this.produtos = produtos
    })
  }

  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao', 'botoes'];

}
