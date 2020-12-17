

/*  
* 
* 
* for listing values of the api service, relates to view list
*/  

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  filterTerm: string;
  customersData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.customersData = [];
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    //Get saved list of customers
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.customersData = response;
    })
  }


  delete(item) {
    //Delete item in customers data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllCustomers();
    });
  }
}
