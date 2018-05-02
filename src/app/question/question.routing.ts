import { QuestionsScreenComponent } from './questions-screen.component';
import { QuestionFormComponent } from './question-form.component';
import { QuestionDetailComponent } from './question-detail.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionsScreenComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];
