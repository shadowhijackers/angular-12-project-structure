import { Component, OnInit } from '@angular/core';
import {PostsService} from "../store/posts.service";
import {Router} from "@angular/router";
import {RoutesEnum} from "../routes.enum";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(
    public postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    this.router.navigateByUrl(RoutesEnum.newPost)
  }
}
