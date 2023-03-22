import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userType$!: Observable<UserType>;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userType$ = this.auth.userType();
  }

}
