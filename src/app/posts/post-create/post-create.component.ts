import { Component } from '@angular/core';

@Component({

    selector: 'app-post-create',
    templateUrl: '../post-create/post-create.component.html',
    styleUrls: ['../post-create/post-creat.component.css']

})

export class PostCreateComponent {

  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement ) {

    this.newPost = postInput.value ;
  }

}
