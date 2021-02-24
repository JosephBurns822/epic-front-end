import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchCourseComponent} from './search-course/search-course.component';
import {EnterEmailComponent} from './enter-email/enter-email.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search-course', component: SearchCourseComponent},
  {path: 'enter-email', component: EnterEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
