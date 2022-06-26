import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css'],
})
export class GrammarComponent implements OnInit {
  subjectTitle: string = 'Grammar';
  subject: string = 'grammer';

  constructor() {}

  ngOnInit(): void {}
}
