
/*  
* 
* 
* Create route, for submitting values of the form
*/  


import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  data: Customer

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Customer();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }

}
