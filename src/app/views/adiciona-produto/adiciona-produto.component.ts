import { ProdutoModel } from './../../models/ProdutoModel';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adiciona-produto',
  templateUrl: './adiciona-produto.component.html',
  styleUrls: ['./adiciona-produto.component.scss']
})
export class AdicionaProdutoComponent implements OnInit {

  produto: ProdutoModel = {
    id:0,
    nome:'',
    preco: 0,
    descricao:''
  }

  constructor(
    private produtoService:ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adicionaProduto(){
    this.produtoService.post(this.produto).subscribe()
    this.router.navigate(['/listaProdutos'])
  }

  cancela(){
    this.router.navigate(['/listaProdutos'])
  }

}
