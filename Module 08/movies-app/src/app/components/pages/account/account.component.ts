import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
