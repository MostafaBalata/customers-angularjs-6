import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../customer.mocked';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  customers: Customer[] = CUSTOMERS;
  selectedCustomer: Customer;
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(customer: Customer): void{
    this.selectedCustomer = customer;
  }
}
