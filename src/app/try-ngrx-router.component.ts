import { Component, Input } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from 'vladivostok';

const POSTS = [
  {title: 'one', id: 1, description: 'one description'},
  {title: 'two', id: 2, description: 'two description'},
];

@Component({
  selector: 'try-new-router-app',
  template: `
    <h1>My Blog</h1>
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/blog">Blog</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: ROUTER_DIRECTIVES
})
export class App { }

@Component({
  selector: 'home-page',
  template: `
    <h2>Home Page</h2>
  `
})
export class HomePage { }

@Component({
  selector: 'blog-page',
  template: `
    <h2>Blog</h2>
    <nav>
      <div><a *ngFor="let post of posts" [routerLink]="['/blog/post', post.id]">{{ post.title }}</a></div>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: ROUTER_DIRECTIVES
})
export class BlogPage {
  posts = POSTS;
}

@Component({
  selector: 'post-page',
  template: `
    <h3>Post {{(post|async).title}}</h3>
    <p>{{(post|async).description}}</p>
  `
})
export class PostPage {
  post:any;
  constructor(route: ActivatedRoute) {
    this.post = (<any>route.params).map(pp => {
      return POSTS.filter(p => p.id == pp.id)[0]
    });
  }
}