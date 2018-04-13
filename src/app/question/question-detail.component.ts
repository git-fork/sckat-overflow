import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'How do JavaScript closures work?',
    'How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves? I ...',
    new Date,
    'devicon-javascript-plain'
  );
}