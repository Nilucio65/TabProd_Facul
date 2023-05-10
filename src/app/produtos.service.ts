
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = "http://localhost:3000/produtos";
  constructor(private http: HttpClient) { }


  getProduto(): Observable<produto[]> {

      return this.http.get<produto[]>(this.url);
  }
}
