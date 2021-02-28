import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //storedPosts = [];
  storedPosts : any[] = [];

  onPostAdded(post: any){
   // const storedPosts : any[] = [];
    this.storedPosts.push(post)
  }
}