import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default title'
  @Input() complete = 'Complete the form to access your account'
  @Input()type: 'logIn' | 'signUp' = 'logIn';
  @Output() close = new EventEmitter<void>()
  modal = true;
  loginName: any = 'alex@gmail.com';
  loginPassword: any = '123qwer';

  signInForm = {
    email: "alex@gmail.com",
    password: "123qwer",
    confirmPassword: "123qwer",
    firstName: "Alex",
    lastName: "Bil",
    photoId: 0
      }
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    
  }

  closeModal() {
    this.modal = false
  }
  submitLogIn() {
    this._authService.logIn({ email: this.loginName, password: this.loginPassword })
    this.loginName = '';
    this.loginPassword = ''
    
  }
  submitSignUp(){
    this._authService.singUp(this.signInForm)
  }

loginText(){
  this.type = 'logIn';
  this.title = 'Log in';
  this.complete = 'Complete the form to access your account'
}

  signUpText(){
    this.type = 'signUp';
    this.title = 'Sign up';
    this.complete = 'Complete the form to create your member account'
  }
}
