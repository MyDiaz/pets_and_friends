import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-adopt-target',
  templateUrl: './adopt-target.component.html',
  styleUrls: ['./adopt-target.component.css']
})
export class AdoptTargetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fillForm(){
    this.router.navigate(['/form-adopt'])
  }

}
