import { Component } from '@angular/core';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = []
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacao: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  // calculaQuant(quant: number) { 
  //   alert(quant)
  //   this.calculaTotal()
  // }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar() {
    this.notificacao.notificar("Parabens! você efetuou a compra.");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
