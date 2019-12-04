import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LegoProject';
  loading: Boolean = false;
  data : object;
  o:Observable<Object>;
  constructor(private http: HttpClient){

  }

  makeRequest(): void {
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
   }
      //object accetta tutti i tipi di risposta
   getData = (d : Object) =>
   {
     this.data = d; //Notifico l’oggetto ricevuto dal server
     this.loading = false;  // Notifico che ho ricevuto i dati
   }
}
