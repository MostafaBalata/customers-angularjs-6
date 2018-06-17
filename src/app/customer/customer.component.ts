import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../customer.mocked';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  customers: Customer[] = CUSTOMERS;

  constructor() { }

  ngOnInit() {
  }

}
