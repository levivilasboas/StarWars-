import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiStarWarsService } from '../../service/api-star-wars.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  idfilm: any;
  public detalhes: any;

  constructor(private router: Router, private api: ApiStarWarsService, private storage: Storage) { }

  ngOnInit() {
        
  }
  
//rota api buscando filme
  async mostraFilmpeloId() {
    await this.storage.get('id').then((resposta) => this.idfilm = resposta);
    console.log('idfil',this.idfilm);
    await this.api.getApiDetalhes(this.idfilm).subscribe((res) => {
      this.detalhes = res;
      console.log('detalhes',this.detalhes);
      
    })
    
  }
  async ionViewWillEnter(){
    this.mostraFilmpeloId();
  }
  /*
  salvaIdPessoa(pessoa_id) {
    this.storage.set('id', pessoa_id);
    console.log('pessoasId', pessoa_id);
    this.router.navigateByUrl('/peoples');
  }
*/
  mostralistaPessoa(){
    this.router.navigateByUrl('/peoples');
  }
  mostralistaPlanets(){
    this.router.navigateByUrl('/planets');
  }
  mostraVeiculos(){
    this.router.navigateByUrl('/vehicles');
  }
  mostraNave(){
    this.router.navigateByUrl('/starships');
  }
  mostraEspecie(){
    this.router.navigateByUrl('/species');
  }
}
