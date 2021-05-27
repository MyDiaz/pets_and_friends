import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Animal } from '../Models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-adopt-target',
  templateUrl: './adopt-target.component.html',
  styleUrls: ['./adopt-target.component.css']
})
export class AdoptTargetComponent implements OnInit {

  animals:any = [];

  constructor(private router: Router, private _animalService: AnimalService) {
    this._animalService.getAnimals().subscribe( data => {
      console.log("ANIMALSSSSSSSSSSSS", data)
      this.animals = data;
    }, error => {
      console.log(error)
    })
   }

  ngOnInit(): void {
    
  }

  fillForm(){
    this.router.navigate(['/form-adopt'])
  }

  wacthAnimal( id:number ){
    this.router.navigate(['/form-adopt',id]);
  }

  }


