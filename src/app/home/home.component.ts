import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './../my-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   test = 'FriendsApp';
  posts = [];


constructor(private mypost: MyServiceService){
   this.mypost.getpost();
   this.mypost.postPosts();
  this.mypost.postCreate();
   
}
 
  //.subscribe(resposts => this.posts=resposts);
 ngOnInit(){ 

}

    // {
    //   title: 'post1', upvotes: 5,
    // },
    // {
    //   title: 'post2', upvotes: 5
    // },
    // {
    //   title: 'post3', upvotes: 15
    // },
    // {
    //   title: 'post4', upvotes: 9
    // },
    // {
    //   title: 'post5', upvotes: 4
    // }
  


  addPost = function () {
    if (this.posts.title === '') {
      return;
    }
    this.posts.push ({
      title: this.title,
      link: this.link,
      push: this.push,
      upvotes: 0,
    });
    this.title = '';
    this.link = '';
  };

  incrementUpvotes = function (post) {
    post.upvotes += 1;

}
}


  


