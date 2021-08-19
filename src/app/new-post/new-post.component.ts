import { Component, OnInit } from '@angular/core';
import {PostsService} from "../store/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postTextArea = '';
  constructor(
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.postsService.addPost({
      data: this.postTextArea,
      comments: []
    })
    this.router.navigateByUrl('posts')
  }

}
