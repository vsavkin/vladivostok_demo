import { bootstrap } from '@angular/platform-browser-dynamic';
import { App, HomePage, BlogPage, PostPage } from './app';
import { provideRouter } from 'vladivostok';
const routes = [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/blog',
    component: BlogPage,
    children: [
      {
        path: '/post/:id',
        component: PostPage
      }
    ]
  }
];

bootstrap(App, provideRouter(routes));
