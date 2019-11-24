import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = env.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }  

  constructor(private httpClient : HttpClient) { }

  public get(path: string): Observable<any> {
    return this.httpClient.get(BASE_URL + path).pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(BASE_URL + path, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(BASE_URL + path, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatErrors));
  }
  
  public formatErrors(error: any): Observable<any> {
    return throwError(error.status);
  }
}
