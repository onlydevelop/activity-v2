import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CorrectChoice {
  id: number;
  text: string;
}

interface QuestionChoice {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  choices: QuestionChoice[];
  correct: CorrectChoice;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  private _jsonURL =
    'https://raw.githubusercontent.com/onlydevelop/activity-questions/master';
  private questions: Question[] = [];

  @Input() subjectTitle: string = '';
  @Input() subject: string = '';
  questionText: string = '';
  choices: QuestionChoice[] = [];
  response: string = '';
  questionId: number = 0;
  currentCount: number = 0;
  totalCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON().subscribe((data) => {
      this.questions = data;
      this.totalCount = this.questions.length;
      this.renderQuestion();
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(`${this._jsonURL}/${this.subject}.json`);
  }

  renderQuestion(): void {
    this.currentCount = this.questionId + 1;
    this.questionText = this.questions[this.questionId].text;
    this.choices = this.questions[this.questionId].choices;
  }

  onCheckClick(answer: string): void {
    if (answer.trim() === '') {
      this.response = 'Please give an answer.';
      return;
    }

    let correctAnswer: string = this.questions[this.questionId].correct.text;
    if (this.questions[this.questionId].correct.id === undefined) {
      this.response = `Sample Answer is: ${correctAnswer}`;
    } else {
      let trimmedLowercaseAnswer = answer.trim().toLowerCase();
      if (correctAnswer.toLocaleLowerCase().includes(trimmedLowercaseAnswer)) {
        this.response = `Correct. Answer is: ${correctAnswer}`;
      } else {
        this.response = `Wrong! Answer is: ${correctAnswer}`;
      }
    }
  }

  onNextClick(answer: any): void {
    answer.value = '';
    this.response = '';

    this.questionId =
      this.questionId === this.questions.length - 1 ? 0 : this.questionId + 1;
    this.renderQuestion();
  }
}
