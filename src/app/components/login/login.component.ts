import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(private authService: AuthService,private router: Router) {

  }

  submitLogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err)=> alert(err.message)
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl(''),
    })
  }
}
