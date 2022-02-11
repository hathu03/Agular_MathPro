import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {


  formUpdateUser: FormGroup | any
  id: any

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.formUpdateUser = this.fb.group({
      emall: [''],
      password: [''],
      fullname: [''],
      image: [''],
      address: [''],
      phone: [''],
      hobby: [''],
      birthday: [''],
      role: [''],
    });
    // @ts-ignore
    this.id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res=>{
      if (res.success == true){
        this.formUpdateUser?.patchValue({
          email: res.data.email,
          password: res.data.password,
          fullname: res.data.fullname,
          image: res.data.image,
          address: res.data.address,
          phone: res.data.phone,
          hobby: res.data.hobby,
          birthday: res.data.birthday,
          role: res.data.role,
        })
      }
    })
  }
  update(id: any){
    let user = this.formUpdateUser.value;
    this.userService.update(id, user).subscribe(()=>{
      this.route.navigate(['users'])
    })
  }

}
