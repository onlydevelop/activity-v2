import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css'],
})
export class MathsComponent implements OnInit {
  subjectTitle: string = 'Mathematics';

  constructor() {}

  ngOnInit(): void {}
}
