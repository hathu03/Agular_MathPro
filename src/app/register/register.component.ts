import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formAddUser?: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({

      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(){
    let data = this.formAddUser?.value;
    this.userService.createUser(data).subscribe(res=>{
      if(res.success == true){
        this.router.navigate([''])
      }
    })
  }
  get email() {
    return this.formAddUser?.get('email')
  }
  get password() {
    return this.formAddUser?.get('password')
  }
  get phone() {
    return this.formAddUser?.get('phone')
  }


}
