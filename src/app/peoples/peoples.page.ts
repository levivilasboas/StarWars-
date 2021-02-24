import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.page.html',
  styleUrls: ['./peoples.page.scss'],
})
export class PeoplesPage implements OnInit {

  constructor(public loadingController: LoadingController ,private api: ApiStarWarsService, private router: Router, public http: HttpClient,private storage: Storage) { }
  pessoas: any[] = [];
  idfilm: any;
  Cfilmes: any[] = [];
  // pessoa_id: any;
  //pessoas_: any[]=[];

  ngOnInit() {

  }
  async getCfilmes() {
    this.presentLoading();
    
    //montar header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    console.log("tamanho", this.Cfilmes.length);
    // salva no storage o id do filme
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);
    //chamar api para a busca de nomes
    
    
    this.api.getApiDetalhes(this.idfilm).subscribe(async (res: any) => {
      this.Cfilmes = res.characters;
      console.log('cF',this.Cfilmes);

      //listar os nomes 
       for (var i = 0; i < this.Cfilmes.length; i++) {
        await this.http.get(this.Cfilmes[i]).subscribe((res: any) => {
          //console.log("res", res.name);
          this.pessoas.push(res);

        })

      }
      console.log("pessoas",this.pessoas);

    })
    
  }
  voltar(){
    this.router.navigateByUrl('/films/details');
  }
 

  ionViewWillEnter() {
    this.getCfilmes();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'May the Force be with you...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
