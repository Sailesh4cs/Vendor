import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  register(): void {
    debugger
    if (this.form.valid) {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      const loginCred = [{ email: email, password: password }];
      localStorage.setItem('loginCred', JSON.stringify(loginCred));
      this.router.navigate(['/']);
    }
  }
}
