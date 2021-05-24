import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form-adopt',
  templateUrl: './form-adopt.component.html',
  styleUrls: ['./form-adopt.component.css']
})
export class FormAdoptComponent implements OnInit {

  adoptForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
