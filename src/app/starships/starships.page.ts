import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { ApiStarWarsService } from '../service/api-star-wars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  idfilm: any;
  apiNave: any []=[];
  Naves: any[]=[];
  
  constructor(private loadingController: LoadingController ,private api: ApiStarWarsService, public http: HttpClient,private storage: Storage ,private router: Router) { }

  ngOnInit() {
  }
  async getNave(){
    this.presentLoading();
    //montar header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    // salva no storage o id do filme
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);
    //chamar api para a busca de planetas
    this.api.getApiDetalhes(this.idfilm).subscribe(async (res: any) => {
      this.apiNave = res.starships;
      console.log("tamanho", this.apiNave.length);
      console.log('NaveApi', this.apiNave);
 
    //listar os nomes de planetas
    for (var i = 0; i < this.apiNave.length; i++) {
      await this.http.get(this.apiNave[i]).subscribe((res: any) => {
        console.log("res", res.name);
        this.Naves.push(res);
      })

    }
    console.log("NaveFinal",this.Naves);
     
  })
  }
  voltar(){
    this.router.navigateByUrl('/films/details');
  }

  ionViewWillEnter() {
    this.getNave();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'May the Force be with you...',
      duration: 200
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
