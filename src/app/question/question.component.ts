import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  questionText: string = '';
  choices: QuestionChoice[] = [];
  response: string = '';
  questionId: number = 0;

  private questions: Question[] = [
    {
      id: 0,
      text: 'How many days are there in a week?',
      choices: [
        {
          id: 0,
          text: '5 days',
        },
        {
          id: 1,
          text: '6 days',
        },
        {
          id: 2,
          text: '7 days',
        },
        {
          id: 3,
          text: '8 days',
        },
      ],
      correct: {
        id: 2,
        text: '7 days',
      },
    },
    {
      id: 1,
      text: 'How many months are in a year?',
      choices: [
        {
          id: 0,
          text: '10 months',
        },
        {
          id: 1,
          text: '11 months',
        },
        {
          id: 2,
          text: '12 months',
        },
        {
          id: 3,
          text: '13 months',
        },
      ],
      correct: {
        id: 2,
        text: '12 months',
      },
    },
  ];

  ngOnInit(): void {
    this.renderQuestion();
  }

  renderQuestion(): void {
    this.questionText = this.questions[this.questionId].text;
    this.choices = this.questions[this.questionId].choices;
  }

  onCheckClick(answer: string): void {
    if (this.questions[this.questionId].correct.text.includes(answer)) {
      this.response =
        'Correct. Answer is: ' + this.questions[this.questionId].correct.text;
    } else {
      this.response =
        'Wrong! Answer is: ' + this.questions[this.questionId].correct.text;
    }
  }

  onNextClick(): void {
    this.questionId = this.questionId === 0 ? 1 : 0;
    this.renderQuestion();
  }
}
