import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { LogoutDialogComponent } from '../logoutDialog.component';
import { of, interval, Observable, from, Subject } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  async ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    const subject = new Subject<number>();
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);
    const observable = from([1, 2, 3]);
    // Create observer object

    myObservable.subscribe({
      next: x => console.log('Observer  a next value: ' + x)
    });

    myObservable.subscribe({
      next: x => console.log('Observer  a next value: ' + x)
    });

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),

    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    // Execute with the observer object
    // observable.subscribe(subject);
    // observable.subscribe(myObservable);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification


  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    debugger
    if (this.form.valid) {
      try {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        const currentCred = JSON.parse(localStorage.getItem('loginCred')).filter(x => x.email == email);

        if (currentCred.filter(x => x.password == password).length > 0) {
          this.router.navigate(['/listing']);
        } else {
          this.dialog.open(LogoutDialogComponent, {
            width: '600px',
            scrollStrategy: new NoopScrollStrategy()
          });
        }
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
