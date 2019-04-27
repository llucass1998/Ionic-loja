import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private produto$: Observable<any>;
  id: string;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.get();
  }


  get(): void {
    this.id = this.route.snapshot.paramMap.get('key');
    this.produto$ = this.produtoService.get(this.id);
  }
}
