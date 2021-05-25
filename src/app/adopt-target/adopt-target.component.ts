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
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  fillForm(){
    this.router.navigate(['/form-adopt'])
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe( data => {
      this.animals = data;
    }, error => {
      console.log(error)
    })
    }
  }


