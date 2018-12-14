import { Router } from '@angular/router';
import { Customers } from './../customers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

/**
 * @author Vaibhavi Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'ims-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers:[DatePipe]

})
export class AddComponent implements OnInit {
   public customerForm: FormGroup;
   public addCustomers:Customers[];
   public createdAt:Date = new Date();
   customer_number:any = 67676;
  constructor(private fb:FormBuilder,
              private customerService: CustomersService,
              private router: Router,
              private datePipe: DatePipe) {
                this.addCustomers=[];
               }

  ngOnInit() {
  // this.createdAt = this.datePipe.transform(this.createdAt, 'dd-MMM-YYYY');


    this.customerForm = this.fb.group(
      {
        name: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        customer_number: [''],
        company: [''],
        group: ['',[Validators.required]],
        email: ['',[Validators.required,Validators.email]],
        mobileNumber:['',[Validators.maxLength(10), Validators.minLength(10)]],
        created_at: [''],
        address: [''],
        note:[''],
        GSTIN: ['']
      }
    );

  }
  addCustomer()
  {
    this.customerService.addCustomer(this.customerForm.value).subscribe(customer=>
      {
        this.customer_number = `C-${this.customer_number}${1}`
        console.log(this.customer_number);
        this.addCustomers.push(customer);
       // this.router.navigate(['customer/view']);
        console.log(this.customerForm.value);
      });
  }

}
