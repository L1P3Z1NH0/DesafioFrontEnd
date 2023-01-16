
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { AdicionaProdutoComponent } from './views/adiciona-produto/adiciona-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletaProdutoComponent } from './views/deleta-produto/deleta-produto.component';
import { EditaProdutoComponent } from './views/edita-produto/edita-produto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaProdutos',
    pathMatch: 'full'
  },
  {
    path:'adicionaProduto',
    component: AdicionaProdutoComponent
  },
  {
    path:'listaProdutos',
    component: ListaProdutosComponent
  },
  {
    path:'produtos/deletaProduto/:id',
    component: DeletaProdutoComponent
  },
  {
    path:'produtos/editaProduto/:id',
    component: EditaProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
