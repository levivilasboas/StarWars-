import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../service/api-star-wars.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  filmes:any []=[];
  films: any[] = [];
 

  constructor(public loadingController: LoadingController,private router: Router, private api: ApiStarWarsService, private storage: Storage) { }

  ngOnInit() {
    console.log(this.films);
    this.getFilm();
    
  }

  getFilm() {
    this.presentLoading();
    this.api.getApi().subscribe((res: any) => {
      this.films = res.results;
      // this.films=_.orderBy(this.films,'episode_id','asc');
      console.log("films", this.films);
    })

  }

  async Teste(idfilm) {
    for(var i = 0 ; i < this.films.length ; i++){
      if(this.films[i].episode_id === idfilm){
        this.storage.set('id', i+1);
        console.log('idI',i+1);
      }
    }
    this.router.navigateByUrl('films/details');
    //await this.storage.get('id').then((resposta) => this.films = resposta);
    
    
  }

  salvaIdFilm(episode_id) {
    //let episode_id;
    this.storage.set('id', episode_id);
    console.log('filmsId', episode_id);
    this.router.navigateByUrl('films/details');
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }






}
