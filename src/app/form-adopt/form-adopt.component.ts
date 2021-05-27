import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { AnimalService } from '../services/animal.service';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../Models/animal';

@Component({
  selector: 'app-form-adopt',
  templateUrl: './form-adopt.component.html',
  styleUrls: ['./form-adopt.component.css']
})
export class FormAdoptComponent implements OnInit {

  animals:any = [];
  animal:Animal;
  adoptForm: FormGroup;
  idAnimal:string;

  constructor(private formBuilder: FormBuilder, private _animalService: AnimalService, 
    private activatedRoute:ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe(params => {
      this.idAnimal = params.get('id');
    });

    this._animalService.getAnimals().subscribe( data => {
      
      this.animals = data;
      console.log("ANIMALSSSSSSSSSSSS", this.animals.data)

      this.animals.data.forEach(element => {
        if(element.id == this.idAnimal){
          this.animal = element;
          console.log(element);
        }
      });

    }, error => {
      console.log(error)
    })
   }

  ngOnInit(): void {
      this.adoptForm = this.formBuilder.group({
      ocupacion    : ['', Validators.required],
      salario: ['', Validators.required, Validators.minLength(3)],
      porque : ['', Validators.required, Validators.minLength(10)],
      importancia   : ['', Validators.required, Validators.minLength(10)]
    })
  }

  saveAnswers(){
    console.log(this.adoptForm.value)
  }

  

}
