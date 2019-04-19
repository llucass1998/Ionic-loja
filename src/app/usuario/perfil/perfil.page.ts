import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Usuario } from "../usuario";
import { UsuarioService } from "../usuario.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  private usuario: Usuario;

  constructor(
    private alertController: AlertController,
    private camera: Camera,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.validar();
  }

  //Camera
  public preview = [];
  getPhoto() {
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
        console.log(base64Image);
        this.preview.push(base64Image);
      },
      err => {
        // Handle error
      }
    );
  }
}
