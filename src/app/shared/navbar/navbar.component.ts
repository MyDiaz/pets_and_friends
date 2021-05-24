import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../login/shared/authentication.service";
import {StorageService} from "../../core/services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  
  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
  }
}
