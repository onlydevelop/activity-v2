import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
})
export class ComputerComponent implements OnInit {
  subjectTitle: string = 'Computer';
  subject: string = 'computer';

  constructor() {}

  ngOnInit(): void {}
}
