import { Post } from './../post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: '../post-list/post-list.component.html',
  styleUrls: ['../post-list/post-list.component.css']

})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSubs: Subscription;

 constructor( public postService: PostsService ) { }

 ngOnInit() {
   this.posts = this.postService.getPost();
   this.postSubs = this.postService.getPostUpdateListner()
                  .subscribe( (posts: Post[] ) => {
                    this.posts = posts;
                    });
 }

 ngOnDestroy(){
   this.postSubs.unsubscribe();
 }


}
