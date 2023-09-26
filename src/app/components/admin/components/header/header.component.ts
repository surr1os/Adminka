import { Component, OnInit } from '@angular/core';
import {NgbAccordionButton} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {
  }
  ngOnInit(){

  }

  logOut(){
    this.authService.logOut();
  }
}
