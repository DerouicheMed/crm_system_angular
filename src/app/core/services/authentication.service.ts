import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { environment as env } from '../../../environments/environment';
import { ApiService } from './api.service';
const BASE_URL = env.serverUrl;
const AUTH_URL = BASE_URL+"/user/authenticate";
declare var $;

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  

  constructor(private api:ApiService) {}

  public authentificate(username:string,passwd:string) {
    let user=new User();
    user.username=username;
    user.password=passwd;
    this.api.post('user/authenticate',user).subscribe(data => {
      if (data != null) {
        let authString = data.username + ":" + data.passwd;
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("basicauth",authString);
      }
    });
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("username") != null) return true;
    else return false;
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("basicauth");
  }
}
