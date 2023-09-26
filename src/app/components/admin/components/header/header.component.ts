import { Component, OnInit } from '@angular/core';
import {NgbAccordionButton} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {filter, mapTo, merge, Observable} from "rxjs";
import {AdminService} from "../../services/admin.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;
  constructor(private authService: AuthService,private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(){
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

  logOut(){
    this.authService.logOut();
  }
}
