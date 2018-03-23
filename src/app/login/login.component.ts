import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  password: string;
  userEmail: string;
  isAuthenticate: boolean;
  ngOnInit() {

  }
  showWarning() {
    this.toastr.warning('something went wrong');
  };
  showError() {
    this.toastr.error('please enter valid credentials');
  };

  login() {
    let userData: any = {};
    userData.email = this.userEmail;
    userData.password = this.password;
    if (this.userEmail === 'helpu@gmail.com' && this.password === 'excellence') {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.router.navigate(["dashboard"]);
    } else if(this.userEmail === '' && this.password === ''){

    } else {
      this.showWarning();
    }
  }
  

}
