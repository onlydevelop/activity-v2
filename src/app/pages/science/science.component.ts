import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  subjectTitle: string = 'Science';
  subject: string = 'science';

  constructor() {}

  ngOnInit(): void {}
}
