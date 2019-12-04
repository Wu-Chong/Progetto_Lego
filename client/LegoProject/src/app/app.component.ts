import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Giochi} from './giochi.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LegoProject';
  loading: Boolean = false;
  data : string[];
  o:Observable<Object>;
  private BASE_URL:string = '/api';
  constructor(private http: HttpClient){

  }

  /*makeRequest(): void {
    this.loading = true;
    this.o = this.http.get('https://3000-c79fc237-cbb2-40f2-a58c-e74b3d5b1f00.ws-eu01.gitpod.io/api/costruzione');
    this.o.subscribe(this.getData);
   }
      //object accetta tutti i tipi di risposta
   getData = (d : Object) =>
   {
     this.data = d; //Notifico l’oggetto ricevuto dal server
     this.loading = false;  // Notifico che ho ricevuto i dati
   }*/

   ngOnInit(): void {

      this.http.get('https://3000-c79fc237-cbb2-40f2-a58c-e74b3d5b1f00.ws-eu01.gitpod.io/api/costruzione').subscribe(data => {
        console.log(data['Istruzione'])
        this.data = data['Istruzione'];
      });
    }

}
