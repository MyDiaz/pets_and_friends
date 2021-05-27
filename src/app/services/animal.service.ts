import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Subject , Observable } from 'rxjs';
import { IAnimal } from '../Interface/ianimal'

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url:string = 'http://localhost:1337/api/animal';
  animal : IAnimal[] = [];
  animal$ : Subject<any[]>;

  constructor( private http: HttpClient) { 
    this.animal$ = new Subject();
  }

  getAnimals() {
    return this.http.get<IAnimal>(this.url);
}


// [
//   {id: 4, name: "Morocha", age: 5, breed: "Criollo", isAdopted: true},
//   {id: 3, name: "Katha", age: 12, breed: "Criollo", isAdopted: true},
//   {id: 2, name: "Arom", age: 6, breed: "Criollo", isAdopted: true}
// ]


}
