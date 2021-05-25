import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url:string = 'http://localhost:3000/api/animal';
  constructor( private http: HttpClient) { }

  getAnimals(){
    return this.http.get(this.url);
}



}
