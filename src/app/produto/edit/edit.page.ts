import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  private produto$: Observable<any>;
  id: string;
  produto: Produto = new Produto;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private camera: Camera, private router: Router) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.id = this.route.snapshot.paramMap.get('key');
    this.produtoService.get(this.id).subscribe(
      res => {
        this.produto = res
      }
    );
  }

  onSubmit() {
    this.produtoService.update(this.produto, this.id);
    this.router.navigate(["/"]);
  };

  async getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.produto.foto.push(base64Image);
      },
      err => {
        console.log(err);
      }
    );
  }
}
