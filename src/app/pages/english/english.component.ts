import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css'],
})
export class EnglishComponent implements OnInit {
  subjectTitle: string = 'English';
  subject: string = 'english';

  constructor() {}

  ngOnInit(): void {}
}
