import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  idfilm: any;
  apiplanetas: any[] = [];
  planetas: any[] = [];
  

  constructor(private api: ApiStarWarsService, public http: HttpClient, private storage: Storage) { }

  ngOnInit() {

  }

   async getPlanetas() {
    //montar header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    // salva no storage o id do filme
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);
    

//chamar api para a busca de planetas
    this.api.getApiDetalhes(this.idfilm).subscribe(async (res: any) => {
      this.apiplanetas = res.planets;
      console.log("tamanho", this.apiplanetas.length);
      console.log('planetasApi', this.apiplanetas);
    //listar os nomes de planetas
    for (var i = 0; i < this.apiplanetas.length; i++) {
      await this.http.get(this.apiplanetas[i]).subscribe((res: any) => {
        console.log("res", res.name);
        this.planetas.push(res);
      })

    }
    console.log("planetasFinal",this.planetas);
     
    })
   }
  
  ionViewWillEnter() {
    this.getPlanetas();
  }

}
