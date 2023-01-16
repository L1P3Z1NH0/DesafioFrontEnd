import { ProdutoService } from './../../services/produto.service';
import { ProdutoModel } from './../../models/ProdutoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss']
})
export class EditaProdutoComponent implements OnInit{

  produto: ProdutoModel={
    id:0,
    nome:'',
    preco:0,
    descricao:''
  }

  constructor(private produtoService:ProdutoService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.getById(parseInt(id!)).subscribe((produto)=>{
      this.produto = produto
    })
  }

  editaProduto(){
    this.produtoService.update(this.produto).subscribe(()=>{
      this.router.navigate(['/listaProdutos'])
    })
  }

  cancela(){
    this.router.navigate(['/listaProdutos'])
  }

}
