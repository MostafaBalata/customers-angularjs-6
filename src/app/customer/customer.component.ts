import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers()
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers)
  }

  deleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer).subscribe(() => 
      this.customers = this.customers.filter((element: Customer) => 
        element.customerID !== customer.customerID
      )
    )
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
