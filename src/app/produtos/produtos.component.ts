import { ProdutosService } from './../produtos.service';
import { Component, OnInit  } from '@angular/core';
import { produto } from './produtos';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  id:number = 1;
  produto: produto[] = [];

  constructor(private ProdutosService : ProdutosService ) {}

  ngOnInit(): void {
    this.loadProduto();
  }

  loadProduto() {
    this.ProdutosService.getProduto().subscribe(
      {
          next:  data =>  this.produto = data,
          error: msg  => console.log("Erro ao chamar o endpont " + msg)
      }
    )

  }
}
