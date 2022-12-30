import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  { 
    path:'home',
    component:CoursesComponent,
  },
  // {
  //   path:'layout', loadComponent:() => import('./layout/layout.component').then(m => m.LayoutComponent)
  // },
  {
    path:'layout', component:LayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
