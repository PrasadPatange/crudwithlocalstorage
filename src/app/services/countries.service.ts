import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environments } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countryURL : string = environments.coutries_API;

  constructor(private http: HttpClient) { }

  public allCountries() : Observable<any>{
    return this.http.get(this.countryURL).pipe(
      catchError(this.handleError)
    )
  }

 public handleError(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
