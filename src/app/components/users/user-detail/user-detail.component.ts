import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any
  id: any
  posts: any

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getById(this.id);
    this.getPosts(this.id);
  }

  private getById(id: number) {
    this.userService.getUser(id).subscribe(res=>{
        this.user = res
      console.log(res)
    })
  }

  private getPosts(id: number){
    this.userService.getPostOfUser(id).subscribe(res=>{
      this.posts = res
    })
  }
}
