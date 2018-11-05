import { Post } from './../post.model';
import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-post-list',
  templateUrl: '../post-list/post-list.component.html',
  styleUrls: ['../post-list/post-list.component.css']

})
export class PostListComponent {

 @Input() posts: Post[] = [];



}
