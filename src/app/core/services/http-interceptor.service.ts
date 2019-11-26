import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpErrorResponse, HttpHandler,HttpEvent } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {  

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //this.loaderService.show();//This method will show loader each time a request 
    //has been made

    //If storage contains a user logged in get the request and put authorization 
    //header in it
    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      })
    }    

    return next.handle(req).pipe(
      //if error is present in the response header redirect to error page      
      catchError((error: HttpErrorResponse) => {
        this.router.navigate(['/error',error.status]);
        return throwError(error);
      }),

      //this will hide the loader when the response from the server has arrived
      //finalize(()=>this.loaderService.hide())
    );
  }
}

