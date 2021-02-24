import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {
  idfilm: any;
  apiEspecie: any[] = [];
  especies: any[] = [];

  constructor(private loadingController: LoadingController ,private api: ApiStarWarsService, public http: HttpClient, private storage: Storage , private router: Router) { }

  ngOnInit() {
  }

  async getEspecie() {
    this.presentLoading();
    //montar header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    console.log("tamanho", this.apiEspecie.length);
    // salva no storage o id do filme
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);
    //chamar api para a busca de especie
    this.api.getApiDetalhes(this.idfilm).subscribe(async (res: any) => {
      this.apiEspecie = res.species;
      console.log('Apiespecie', this.apiEspecie);

      //listar os nomes 
      for (var i = 0; i < this.apiEspecie.length; i++) {
        await this.http.get(this.apiEspecie[i]).subscribe((res: any) => {
          //console.log("res", res.name);
          this.especies.push(res);

        })

      }
      console.log("especies", this.especies);

    })
  }
  voltar(){
    this.router.navigateByUrl('/films/details');
  }

  ionViewWillEnter() {
    this.getEspecie();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'May the Force be with you...',
      duration: 500
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
