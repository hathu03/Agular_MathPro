import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StatusService} from "../services/status.service";

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {
  userLogin: any;
  posts: any
  createForm: FormGroup | any
  statuses: any
  constructor(private authService: AuthService,
              private router: Router,
              private postServive: PostService,
              private fb: FormBuilder,
              private statusService: StatusService) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('user'));
    this.getPosts()
    this.getAllStatus()
    this.createForm = this.fb.group({
      content: [""],
      image: [""],
      status_id: [""],
      user_id: [this.userLogin.id],
    })


  }

  logout(){
    this.authService.logout().subscribe(res=>{
      if(res.message){
        localStorage.clear()
        this.router.navigate([""])
      }
    })
  }
  getPosts() {
    this.postServive.getAll().subscribe(res => {
      this.posts = res
    })
  }
  create(){
    let data = this.createForm?.value
    this.postServive.create(data).subscribe(res => {
      this.posts.push(res)
      // this.router.navigate(["newfeed"])
      location.reload();
    })
  }
  getAllStatus() {
    this.statusService.getAll().subscribe(res => {
      this.statuses = res
    })
  }

}
