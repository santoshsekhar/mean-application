import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {

  // posts=[
  //   {title:'First post', content:'This is first\'s content'},
  //   {title:'Second post', content:'This is second\'s content'},
  //   {title:'Third post', content:'This is third\'s content'}
  // ]
  @Input() posts=[]

}