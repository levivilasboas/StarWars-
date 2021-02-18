import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {
  idfilm: any;
  apiEspecie: any[] = [];
  especies: any[] = [];

  constructor(private api: ApiStarWarsService, public http: HttpClient, private storage: Storage) { }

  ngOnInit() {
  }

  async getEspecie() {
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

  ionViewWillEnter() {
    this.getEspecie();
  }

}
