import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CUSTOMERS } from '../customer.mocked';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;
  let customerService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [CustomerDetailsComponent],
      providers: [
        { provide: Location, useClass: SpyLocation },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap(CUSTOMERS[0])
            }
          }
        }, CustomerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    customerService = TestBed.get(CustomerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
