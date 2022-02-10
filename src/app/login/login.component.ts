import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin?: FormGroup
  errLogin?: string

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [""],
      password: [""]
    })
  }

  submit(){
    let data = this.formLogin?.value;
    this.authService.login(data).subscribe(res=>{
      if(res.error){
        this.errLogin = res.message
      }else {
        let token = res.access_token
        localStorage.setItem("token",token)
        localStorage.setItem("user",JSON.stringify(res.user))
        this.router.navigate(['newfeed'])

      }
    })
  }

}
