import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epic-Site';

  objUserInput = {
    userName: '',
    passWord: ''
  };

  enterEpicSite() {

  }
}



// Example of how input validation will work. Just need to try and figure out
// how to really get the web pages to respond to the user clicking
// the links
//
// <input id="name" name="name" class="form-control"
// required minlength="4" appForbiddenName="bob"
//   [(ngModel)]="hero.name" #name="ngModel" >
//
// <div *ngIf="name.invalid && (name.dirty || name.touched)"
// class="alert alert-danger">
//
// <div *ngIf="name.errors.required">
//   Name is required.
// </div>
// <div *ngIf="name.errors.minlength">
//   Name must be at least 4 characters long.
// </div>
// <div *ngIf="name.errors.forbiddenName">
//   Name cannot be Bob.
// </div>
//
// </div>
