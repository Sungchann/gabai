import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight-highlight',
  templateUrl: './insight-highlight.component.html',
  styleUrls: ['./insight-highlight.component.scss'],
})
export class InsightHighlightComponent  implements OnInit {
  @Input() desc: string = '';
  @Input() title: string = '';

  star: string = 'assets/icon/star.png';
  constructor() { }

  ngOnInit() {}

}
