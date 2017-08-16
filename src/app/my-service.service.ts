import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { PostComponent } from './post/post.component';

@Injectable()
export class MyServiceService {

  constructor(private http: Http) { }

  getpost(){
    return this.http.get('http://localhost:3000/posts')
    .subscribe(
(data) => console.log(data)
)

}

postPosts(...code:string[]) {
let body = JSON.stringify({ "postcodes": code});
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

this.http.post('http://localhost:3000/posts/', body, options)
.map((res) => res.json())
.subscribe((res) => {
console.log(res);
})
}

 postCreate() {
return this.http.get('http://localhost:3000/posts/:post')
.map((res) => res.json())
.subscribe((res) => {
console.log(res);
})
 }
  
  Upvote = function (post) {
   return this.http.post('http://localhost:3000/posts')
    .map((res:Response) => res.json());
  };

  get = function (id) {
   return this.http.get('http://localhost:3000/posts/ + id')
      .map((res:Response) => res.json());
  };

  addComment = function (id, comment) {
  return this.http.post('http://localhost:3000/posts/ + id + /comments', comment)
  .map((res:Response) => res.json());
};

  upvoteComment = function (post, comment) {
    this.http.post('http://localhost:3000/posts/ + post._id + /comments/ +comment._id + /upvote')
      .map((res:Response) => res.json());
      };
  }







