import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  inputType = 'password';
  visible = false;

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private loginservice: AuthenticationService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.form.value)
  }

  send() {
    // this.router.navigate(['/']);
    if (this.loginservice.authenticate(this.form.value.userName, this.form.value.password)
    ) {
      this.router.navigate(['/']);
      this.invalidLogin = false

      console.log(this.form.value)
    } else {
      alert("Incorrect User Name or Password")
      this.invalidLogin = true
      // this.router.navigate(['/']);
      console.log(this.form.value)
    }

  }


  onReset() {
    this.form.reset();

  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
