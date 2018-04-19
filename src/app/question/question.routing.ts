import { QuestionsListComponent } from './questions-list.component';
import { QuestionFormComponent } from './question-form.component';
import { QuestionDetailComponent } from './question-detail.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionsListComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];
