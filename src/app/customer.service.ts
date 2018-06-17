import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { CUSTOMERS } from './customer.mocked'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}
