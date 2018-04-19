import { Component } from '@angular/core';
import { Question } from './question.model';

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
  ]
})
export class QuestionsListComponent {
  questions: Question[] = new Array(10).fill(q);
}