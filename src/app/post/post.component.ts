import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  

  

  constructor() { }

  ngOnInit() {
  }
  
addComment = function(){
  if(this.body === '') { return; }
  this.post.addComment({
    body: this.body,
    author: 'user',
    upvotes: 0
  });
  this.body = '';
};

    
  incrementUpvotes = function (post ,comments) {
    this.posts.upvoteComments(post, comments);
  };
}




