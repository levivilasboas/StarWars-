import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  idfilm: any;
  apiveiculos: any[] = [];
  veiculos: any[] = [];
  

  constructor(private loadingController: LoadingController ,private api: ApiStarWarsService ,public http: HttpClient, private storage: Storage , private router: Router) { }

  

  async getVeiculos(){
    this.presentLoading();
    //montar header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    // salva no storage o id do filme
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);

    //chamar api para a busca de planetas
    this.api.getApiDetalhes(this.idfilm).subscribe(async (res: any) => {
      this.apiveiculos = res.vehicles;
      console.log("tamanho", this.apiveiculos.length);
      console.log('veiculosApi', this.apiveiculos);
 
    //listar os nomes de planetas
    for (var i = 0; i < this.apiveiculos.length; i++) {
      await this.http.get(this.apiveiculos[i]).subscribe((res: any) => {
        console.log("res", res.name);
        this.veiculos.push(res);
      })

    }
    console.log("veiculosFinal",this.veiculos);
     
  })
}
voltar(){
  this.router.navigateByUrl('/films/details');
}
// ionViewWillEnter() {
//   this.getVeiculos();
// }
async ngOnInit() {
  this.getVeiculos();
}
async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'May the Force be with you...',
    duration: 50
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

}
