import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiStarWarsService {

  constructor(public http : HttpClient) { }

  getApi(){
    // Monta header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    header = header.append('Authorization', 'Bearer ' );
    
    return this.http.get(environment.BASE_URL+'films/',{headers:header});
  }
  getPessoas(url){
    // Monta header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    
    console.log('url',url);
    return this.http.get(`url`,{headers:header});
  }

  getApiDetalhes(id){
    // Monta header
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
   header = header.append('Authorization', 'Bearer ' );
  //  console.log(id); 
   return this.http.get(environment.BASE_URL+`films/${id}/`,{headers:header});
   
 }
  
}
