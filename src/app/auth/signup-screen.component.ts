import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html'
})
export class SignupScreenComponent implements OnInit {
  
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, firstName, lastName } = this.signupForm.value;
      const user = new User(email, password, firstName, lastName);
      console.log(user)
    }
  }
}