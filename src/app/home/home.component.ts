import {Component, OnInit} from "@angular/core";
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import {AuthenticationService} from "../login/shared/authentication.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public user: User;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

 

}
