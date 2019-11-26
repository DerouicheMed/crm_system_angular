import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent implements OnInit {
  user = new User();

  constructor(
    private api: ApiService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  onSubmit(form) {
    this.api.post("/user/authenticate", this.user).subscribe(data => {
      if (data != null) {
        let authString = data.username + ":" + data.passwd;
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("basicauth", authString);
      }
    });
  }
}
