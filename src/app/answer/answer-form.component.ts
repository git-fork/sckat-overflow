import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from '../auth/user.model';
import { Question } from '../question/question.model';
import { QuestionsService } from '../question/questions.service';
import * as SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
    form {
      margin-top: 20px;
    }
  `],
  providers: [QuestionsService]
})
export class AnswerFormComponent {
  @Input() question: Question;
  smoothScroll: SmoothScroll;

  constructor(private questionsService: QuestionsService) {
    this.smoothScroll = new SmoothScroll();
  }

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question
    );
    this.questionsService
      .addAnswer(answer)
      .subscribe(
        a => {
          this.question.answers.unshift(a);
          const anchor = document.querySelector('#answersTitle')
          this.smoothScroll.animateScroll(anchor);
        },
        error => console.log(error)
      );
    form.reset();
  }
}