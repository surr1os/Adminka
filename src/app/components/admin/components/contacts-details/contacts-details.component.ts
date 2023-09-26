import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {User} from "../../user";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";
import {OnInit} from "@angular/core";

@Component({
    selector: 'app-contacts-details',
    templateUrl: './contacts-details.component.html',
    styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent {

    user!: Observable<User>
    id!: number

    constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {
    }

    ngOnInit() {
       // this.activatedRoute.params.subscribe((params) => this.id = params?.['id'])
      //  this.user = this.adminService.getPerson(this.id)


    }

}
