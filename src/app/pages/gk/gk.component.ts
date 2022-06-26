import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css'],
})
export class GkComponent implements OnInit {
  subjectTitle: string = 'General Knowledge';
  subject: string = 'gk';

  constructor() {}

  ngOnInit(): void {}
}
