import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';
import { Flight } from './models/flight.model';
import { CustomerServiceService } from './services/customer-service.service';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'FligthBooks';


  
  customers: Customer[] = [{ id: 0, lastname: '', firstname: '', age: 0, country: '', email: '', gender: '' }];
  numberOfCustomers: number | null = null;

  filterText: string = '';
  isNewCustomerToCreate:boolean=false;
  lastOderWas:any;
  
  clickedCustomerId:number=0;

  hooveredCustomer:Customer={ id: 0, lastname: '', firstname: '', age: 0, country: '', email: '', gender: '' }


  constructor(private customerservice: CustomerServiceService,private flightservice: FlightService ) {

  }


  ngOnInit(): void {
    this.loadCustomers();
    

  }

  isCustomerVisible(cust: Customer) {
    return cust.lastname.toUpperCase().indexOf(this.filterText.toUpperCase()) >= 0;
  }

  loadCustomers() {
    this.customerservice.getAllCustomers().subscribe(data => {
      this.customers = data;
      this.numberOfCustomers = data.length;
    })
  }
  
 
  registerCustomer(event: Customer) {
    this.customerservice.registerCustomer(event).subscribe(
      data => {
        this.loadCustomers();
        this.isNewCustomerToCreate=false;

      }
    );
  }

  deleteCustomer(customer: Customer) {
    return this.customerservice.deleteCustomer(customer.id).subscribe(() => {
      this.loadCustomers();
      this.lastOderWas;
    }
    );
  }

  sortByFirstname() {
    this.lastOderWas=this.sortByFirstname;
    return this.customers.sort((f1, f2) =>
      f1.firstname.localeCompare(f2.firstname)
      );
     
      
  }

  sortByLastname() {
    this.lastOderWas=this.sortByLastname;
    return this.customers.sort((f1, f2) =>
      f1.lastname.localeCompare(f2.lastname)
    );
  }

  sortByCountry() {
    this.lastOderWas=this.sortByCountry;
    return this.customers.sort((f1, f2) =>
    f1.country.localeCompare(f2.country)
  );
  }

  setHooveredCountryToDefault(){
    this.hooveredCustomer={ id: 0, lastname: '', firstname: '', age: 0, country: '', email: '', gender: '' };
  }

  setCountryToUnknown(customer:Customer){
      customer.country='Unknown';
      this.customerservice.updateCountry(customer).subscribe(()=>{
        this.loadCustomers();
        this.lastOderWas();
      });
  }
}
