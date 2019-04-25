import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  produto: Produto;
  key: string;

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto;
  }

  onSubmit() {
    if (this.key) {
      this.produtoService.update(this.produto, this.key);
      this.produto = new Produto();
    } else {
      this.produtoService.insert(this.produto);
    }
    this.router.navigate(["/"]);

    this.produto = new Produto();
  }
}
