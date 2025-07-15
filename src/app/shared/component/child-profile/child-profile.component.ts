import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.scss'],
})
export class ChildProfileComponent  implements OnInit {
  @Input() currentChild: any;

  constructor() { }

  ngOnInit() {}

}
