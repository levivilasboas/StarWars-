import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private api: ApiStarWarsService, public http: HttpClient,private storage: Storage ) { }

  ngOnInit() {
  }
  async getNave(){
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


  ionViewWillEnter() {
    this.getNave();
  }

}
