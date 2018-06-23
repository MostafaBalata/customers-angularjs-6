import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location

  ) { }

  ngOnInit() {
    this.geCustomer();
  }

  geCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
    } else {
      this.customer = new Customer();
      this.customer.name = {
        first: '',
        last: ''
      };
    }
  }

  update(id: Number): void {
    if (id) {
      this.customerService.updateCustomer(this.customer)
        .subscribe(() => this.goBack());
    } else  {
       this.customerService.addCustomer(this.customer)
      .subscribe(() => this.goBack());
    }
  }

  add(): void {
    this.customerService.addCustomer(this.customer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
