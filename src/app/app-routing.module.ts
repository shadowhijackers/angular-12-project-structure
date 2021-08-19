import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/gaurds";
import {CustomPreloadingStrategy} from "./custom-preloading-strategy.service";
import {RoutesEnum} from "./routes.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.posts,
    pathMatch: 'full'
  },
  {
    path: RoutesEnum.posts,
    data: {preload: true},
    loadChildren: ()=>import('./post-list/post-list.module').then(m=>m.PostListModule)
  },
  {
    path: RoutesEnum.newPost,
    loadChildren: ()=>import('./new-post/new-post.module').then(m=>m.NewPostModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**', //wild card like 404
    redirectTo: RoutesEnum.posts,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: CustomPreloadingStrategy,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
