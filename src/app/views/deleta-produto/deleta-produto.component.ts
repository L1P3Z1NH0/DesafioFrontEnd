import { ProdutoService } from './../../services/produto.service';
import { ProdutoModel } from './../../models/ProdutoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleta-produto',
  templateUrl: './deleta-produto.component.html',
  styleUrls: ['./deleta-produto.component.scss']
})
export class DeletaProdutoComponent implements OnInit{

  produto:ProdutoModel={
    id:0,
    nome:'',
    preco:0,
    descricao:''
  }

  constructor(private produtoService:ProdutoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.getById(parseInt(id!)).subscribe((produto)=>{
      this.produto = produto
    })
  }

  deleta(){
    this.produtoService.delete(this.produto.id).subscribe(()=>{
      this.router.navigate(['/listaProdutos'])
    })
  }

  cancela(){
    this.router.navigate(['/listaProdutos'])
  }
}
