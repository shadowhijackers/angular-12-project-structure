import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import { Post } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  state$: ReplaySubject<Post[]> = new ReplaySubject<Post[]>(1);
  _posts: Post[] = [];

  constructor() { }

  addPost(post: Post){
    this._posts.push({
      ...post,
      id: this._posts.length.toString(),
    });
    this.state$.next(this._posts);
  }

  deletePost(post: Post){
    const idx = this._posts.findIndex(_post=>post.id == _post.id);
    if (idx > -1){
      this._posts.splice(idx, 1);
      this.state$.next(this._posts);
    }
  }
}
