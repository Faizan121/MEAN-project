import { PostsService } from './../posts.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({

    selector: 'app-post-create',
    templateUrl: '../post-create/post-create.component.html',
    styleUrls: ['../post-create/post-creat.component.css']

})

export class PostCreateComponent {

constructor(public postService: PostsService) {}


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
