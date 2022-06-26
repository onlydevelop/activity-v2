import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sst',
  templateUrl: './sst.component.html',
  styleUrls: ['./sst.component.css'],
})
export class SstComponent implements OnInit {
  subjectTitle: string = 'Social Studies';

  constructor() {}

  ngOnInit(): void {}
}
