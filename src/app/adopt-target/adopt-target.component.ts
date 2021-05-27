import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Animal } from '../Models/animal';
import { AnimalService } from '../services/animal.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-adopt-target',
  templateUrl: './adopt-target.component.html',
  styleUrls: ['./adopt-target.component.css']
})
export class AdoptTargetComponent implements OnInit {

  animals:any = [];
  animalsSet:any = [];
  filterAnimals:any = [];
  lengthAnimals:number = 10;
  pageSize:number = 3;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  perro:boolean = true;
  gato:boolean = true;
  pageIndex:number=0;

  constructor(private router: Router, private _animalService: AnimalService) {
   
   }

  ngOnInit(): void {
    this._animalService.getAnimals().subscribe( data => {
      console.log("ANIMALSSSSSSSSSSSS", data)
      this.animalsSet = data;
      this.lengthAnimals = this.animalsSet.data.length
      console.log("animalsSet",this.animalsSet)
      this.animals = this.animalsSet.data.slice(0,this.pageSize);
     
    }, error => {
      console.log(error)
    })
    
  }

  fillForm(){
    this.router.navigate(['/form-adopt'])
  }

  wacthAnimal( id:number ){
    this.router.navigate(['/form-adopt',id]);
  }

  updateTargets(event){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.animals = this.animalsSet.data.slice(
      event.pageSize*event.pageIndex,event.pageSize*(event.pageIndex+1)
      );
      console.log(this.animals)
  }

  private groupBy(collection, property){
    var i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1)
            result[index].push(collection[i]);
        else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
}

showCategories(){

  this.animals = [];

  this.animalsSet.data.forEach(element => {
    if(element.type == "Perro" && this.perro ){
      this.animals.push(element);
    }
    else if(element.type == "Gato" && this.gato){
      this.animals.push(element);
    }
  });

  this.animals = this.animalsSet.data.slice(
    this.pageSize*this.pageIndex,this.pageSize*(this.pageIndex+1)
    );
}

  }


