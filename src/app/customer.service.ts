import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { CUSTOMERS } from './customer.mocked'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = '/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(`${this.url}`)
    .pipe(
      tap(customers => console.log(`fetched heroes`, customers)),
      catchError(this.handleError('getCustomers', []))
    );
  }

  getCustomer(customerID: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${customerID}`).pipe(
      tap(_ => console.log(`fetched hero id=${customerID}`)),
      catchError(this.handleError<Customer>(`getHero id=${customerID}`))
    );
  }

  updateCustomer (customer: Customer): Observable<any> {
    return this.http.post(`${this.url}/${customer.customerID}`, customer, httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${customer.customerID}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  addCustomer (customer: Customer): Observable<any> {
    return this.http.put<Customer>(`${this.url}/`, customer, httpOptions).pipe(
      tap(_ => console.log(`add customer id=${customer.customerID}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  deleteCustomer (customer: Customer): Observable<any> {
    return this.http.delete<Customer>(`${this.url}/${customer.customerID}`, httpOptions).pipe(
      tap(_ => console.log(`delete customer id=${customer.customerID}`)),
      catchError(this.handleError<any>('deleteCustomer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
