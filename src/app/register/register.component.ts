import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 

    this.registerForm = this.formBuilder.group({
      name    : ['', Validators.required, Validators.minLength(3)],
      lastname: ['', Validators.required, Validators.minLength(3)],
      address : ['', Validators.required, Validators.minLength(10)],
      phone   : ['', Validators.required, Validators.minLength(10)],
      email   : ['', Validators.required, Validators.minLength(10), Validators.email],
      age     : ['', Validators.required, Validators.min(18)]
    })
  }

  get name() { return this.registerForm.get('name'); }

  ngOnInit(): void {

  }

  submitRegister(){
    console.log(this.registerForm.value);
  }

}
