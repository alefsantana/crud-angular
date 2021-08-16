import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Elemen} from './elemento.interface';
import { Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService {
  
  uri = 'http://localhost:3000/elementos'; // api rest fake

    listaTributos: any;

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(`${this.uri}`)
  }

  getElemento(): Observable<Elemen[]>{
    return this.httpClient.get<Elemen[]>(this.uri);

  }

  getElementos(): Observable<Elemen[]> {
    return this.httpClient.get<Elemen[]>(this.uri)
      
  }

  deleteElemento(id: Elemen) {
    console.log(id)
    return this.httpClient.delete(`${this.uri}/${id.id}`)
  }

  deleteCar(elemento: Elemen){
    return this.httpClient.delete<Elemen>(this.uri + '/' + elemento.id,this.httpOptions)
    
  
     
      
  }


  

}


