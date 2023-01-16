import { API_PATH } from './../environment/environment';
import { ProdutoModel } from './../models/ProdutoModel';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>(API_PATH)
  }

  getById(id:number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`${API_PATH}/${id}`)
  }

  post(produto:ProdutoModel):Observable<ProdutoModel>{
    return this.http.post<ProdutoModel>(API_PATH, produto)
  }

  delete(id:number):Observable<ProdutoModel>{
    return this.http.delete<ProdutoModel>(`${API_PATH}/${id}`)
  }

  update(produto:ProdutoModel):Observable<ProdutoModel>{
    return this.http.put<ProdutoModel>(`${API_PATH}/${produto.id}`, produto)
  }

}
