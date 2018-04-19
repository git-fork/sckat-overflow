import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionsService } from './questions.service'

const q = new Question(
  'How do JavaScript closures work?',
  'How would you explain JavaScript closures ...',
  new Date(),
  'none'
)

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styles: [`
    .icon {
      width: 32px !important;
      height: 32px !important;
      font-size: 32px !important;
      padding: 0 !important;
    }

    .add-question {
      position: fixed;
      bottom: 30px;
      right: 30px;
    }
  `
  ],
  providers: [QuestionsService]
})
export class QuestionsListComponent implements OnInit {
  constructor (private questionsService: QuestionsService) {}

  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionsService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      });
  }
}